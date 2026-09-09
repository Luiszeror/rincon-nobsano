import dotenv from 'dotenv'
dotenv.config({ path: '.env.local' })

import { createClient } from '@sanity/client'
import { menuCafeLaRuana } from '../data/menuCafeLaRuana.js'
import { menuRinconNobsano } from '../data/menuRinconNobsano.js'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

async function seed() {
  const docs = []

  // Café La Ruana: misma carta en las 3 sedes de café
  const sedesCafe = ['cafe-nobsa', 'cafe-mongui', 'cafe-paipa']
  for (const local of sedesCafe) {
    menuCafeLaRuana.forEach((cat) => {
      cat.platos.forEach((p, i) => {
        docs.push({
          _type: 'plato',
          local,
          categoria: cat.nombre,
          nombre: p.nombre,
          descripcion: p.desc || '',
          orden: i,
        })
      })
    })
  }

  // El Rincón Nobsano: menú de 2 niveles
  menuRinconNobsano.forEach((seccion) => {
    seccion.subsecciones.forEach((sub) => {
      sub.platos.forEach((p, i) => {
        docs.push({
          _type: 'plato',
          local: 'rincon-nobsano',
          seccionPrincipal: seccion.nombre,
          categoria: sub.nombre,
          nombre: p.nombre,
          descripcion: p.desc || '',
          orden: i,
        })
      })
    })
  })

  console.log(`Subiendo ${docs.length} platos a Sanity...`)
  const tx = client.transaction()
  docs.forEach(doc => tx.create(doc))
  await tx.commit()
  console.log('¡Listo! Menú cargado.')
}

seed().catch(console.error)