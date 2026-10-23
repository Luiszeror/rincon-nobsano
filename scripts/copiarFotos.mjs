// Copia fotos del restaurante a los cafés para PLATOS y PRODUCTOS ESTRELLA.
// Coincidencia por nombre ignorando SOLO mayúsculas/minúsculas.
// Tildes, espacios y palabras deben ser idénticos.
// Nunca pisa una foto que ya exista en el destino.
//
// Simulación (no cambia nada):
//   SANITY_API_TOKEN=tu_token node scripts/copiarFotos.mjs
// Aplicar:
//   SANITY_API_TOKEN=tu_token node scripts/copiarFotos.mjs --aplicar
// Aplicar y además crear productos estrella que falten en los cafés:
//   SANITY_API_TOKEN=tu_token node scripts/copiarFotos.mjs --aplicar --crear-faltantes

import dotenv from 'dotenv'
dotenv.config({ path: '.env.local' })

import { createClient } from '@sanity/client'

const APLICAR = process.argv.includes('--aplicar')
const CREAR_FALTANTES = process.argv.includes('--crear-faltantes')
const CAFES = ['cafe-nobsa', 'cafe-mongui', 'cafe-paipa']

// Solo se usa para COMPARAR nombres; el texto guardado no se toca.
const clave = (texto) => (texto || '').toLowerCase()

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
  perspective: 'published',
})

async function copiarFotos(tipo, etiqueta) {
  console.log(`\n══════ ${etiqueta} ══════`)

  const fuentes = await client.fetch(
    `*[_type == $tipo && local == "rincon-nobsano" && defined(imagen.asset)]{ _id, nombre, descripcion, orden, imagen }`,
    { tipo }
  )
  const destinos = await client.fetch(
    `*[_type == $tipo && local in $cafes && !defined(imagen.asset)]{ _id, nombre, local }`,
    { tipo, cafes: CAFES }
  )

  console.log(`Del restaurante con foto: ${fuentes.length}`)
  console.log(`De cafés sin foto:        ${destinos.length}`)

  const fotoPorNombre = new Map()
  for (const f of fuentes) {
    const k = clave(f.nombre)
    if (k && !fotoPorNombre.has(k)) fotoPorNombre.set(k, f.imagen)
  }

  const coincidencias = []
  let sinCoincidencia = 0
  for (const d of destinos) {
    const imagen = fotoPorNombre.get(clave(d.nombre))
    if (imagen) coincidencias.push({ ...d, imagen })
    else sinCoincidencia++
  }

  console.log(`\n✅ Recibirán foto: ${coincidencias.length}`)
  coincidencias.forEach(c => console.log(`   - [${c.local}] ${c.nombre}`))
  console.log(`➖ Sin coincidencia: ${sinCoincidencia}`)

  if (APLICAR) {
    for (let i = 0; i < coincidencias.length; i += 50) {
      const lote = coincidencias.slice(i, i + 50)
      const tx = client.transaction()
      lote.forEach(c => tx.patch(c._id, { set: { imagen: c.imagen } }))
      await tx.commit()
    }
    console.log(`Aplicado: ${coincidencias.length} fotos copiadas.`)
  }

  return fuentes
}

async function crearEstrellaFaltantes(fuentes) {
  console.log(`\n══════ Crear productos estrella faltantes ══════`)

  const existentes = await client.fetch(
    `*[_type == "productoEstrella" && local in $cafes]{ nombre, local }`,
    { cafes: CAFES }
  )
  const yaExiste = new Set(existentes.map(e => `${e.local}||${clave(e.nombre)}`))

  const nuevos = []
  for (const cafe of CAFES) {
    for (const f of fuentes) {
      if (!yaExiste.has(`${cafe}||${clave(f.nombre)}`)) {
        nuevos.push({
          _type: 'productoEstrella',
          local: cafe,
          nombre: f.nombre,
          descripcion: f.descripcion || '',
          orden: f.orden ?? 0,
          imagen: f.imagen,
        })
      }
    }
  }

  console.log(`Se crearían: ${nuevos.length} productos estrella`)
  nuevos.forEach(n => console.log(`   - [${n.local}] ${n.nombre}`))

  if (APLICAR && CREAR_FALTANTES) {
    for (let i = 0; i < nuevos.length; i += 50) {
      const tx = client.transaction()
      nuevos.slice(i, i + 50).forEach(n => tx.create(n))
      await tx.commit()
    }
    console.log(`Creados: ${nuevos.length} productos estrella.`)
  }
}

async function main() {
  await copiarFotos('plato', 'PLATOS')
  const fuentesEstrella = await copiarFotos('productoEstrella', 'PRODUCTOS ESTRELLA')
  await crearEstrellaFaltantes(fuentesEstrella)

  if (!APLICAR) {
    console.log('\nSIMULACIÓN: no se cambió nada. Agrega --aplicar para ejecutar.')
  } else if (!CREAR_FALTANTES) {
    console.log('\nNota: no se crearon productos estrella nuevos (falta --crear-faltantes).')
  }
}

main().catch(console.error)