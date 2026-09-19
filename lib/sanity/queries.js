import { client } from './client'

import { urlFor } from './image'

const ICONOS = {
  'Platos a la Carta': '🍽',
  'Café y Frutería': '☕',
  'Cafetería': '☕',
}

export async function getContenidoLocal(local) {
  const query = `{
    "info": *[_type == "local" && id == $local][0]{ nombreVisible, horarios, contacto },
    "productosEstrella": *[_type == "productoEstrella" && local == $local] | order(orden asc) {
      nombre, "desc": descripcion, "imagen": imagen.asset->url
    },
    "ambiente": *[_type == "fotoAmbiente" && local == $local] | order(orden asc) {
      titulo, texto, "imagen": imagen.asset->url
    },
    "anuncios": *[_type == "anuncio" && local == $local] | order(_createdAt desc) {
      tipo, titulo, texto, fecha,
      "imagen": imagen.asset->url,
      "video": video.asset->url
    },
    "platos": *[_type == "plato" && local == $local] | order(seccionPrincipal asc, categoria asc, orden asc) {
  seccionPrincipal, categoria, nombre, "desc": descripcion, imagen
},
    "menuFisico": *[_type == "menuFisico" && local == $local] {
      seccionPrincipal, "fotos": fotos[].asset->url
    }
  }`

  const data = await client.fetch(query, { local }, { next: { revalidate: 60 } })

  const fotosPara = (seccionPrincipal) =>
    (data.menuFisico || [])
      .filter(m => (m.seccionPrincipal || '') === (seccionPrincipal || ''))
      .flatMap(m => m.fotos || [])

  // ── Menú plano (cafés): agrupa por `categoria` ──
  const menuPlano = () => {
  const platos = procesarPlatos(data.platos)
  const categorias = [...new Set(platos.map(p => p.categoria))]
  return categorias.map(nombre => ({
    nombre,
    icono: ICONOS[nombre] || '☕',
    platos: platos.filter(p => p.categoria === nombre),
  }))
}

  // ── Menú anidado (restaurante): agrupa por `seccionPrincipal` → `categoria` ──
  const menuAnidado = () => {
  const platos = procesarPlatos(data.platos)
  const secciones = [...new Set(platos.map(p => p.seccionPrincipal).filter(Boolean))]
  return secciones.map(nombreSeccion => {
    const platosSeccion = platos.filter(p => p.seccionPrincipal === nombreSeccion)
    const subs = [...new Set(platosSeccion.map(p => p.categoria))]
    return {
      nombre: nombreSeccion,
      icono: ICONOS[nombreSeccion] || '🍽',
      fotosMenu: fotosPara(nombreSeccion),
      subsecciones: subs.map(nombreSub => ({
        nombre: nombreSub,
        platos: platosSeccion.filter(p => p.categoria === nombreSub),
      })),
    }
  })
}

  function procesarPlatos(platos) {
  return (platos || []).map(p => ({
    ...p,
    imagenMini: p.imagen ? urlFor(p.imagen).width(200).height(200).fit('crop').crop('focalpoint').auto('format').url() : null,
    imagen: p.imagen ? urlFor(p.imagen).width(700).height(500).fit('crop').crop('focalpoint').auto('format').url() : null,
  }))
}

  return {
    nombreVisible: data.info?.nombreVisible || '',
    horarios: data.info?.horarios || [],
    contactos: data.info?.contacto || {},
    productosEstrella: data.productosEstrella || [],
    ambiente: data.ambiente || [],
    anuncios: data.anuncios || [],
    menuPlano: menuPlano(),
    menuAnidado: menuAnidado(),
    fotosMenuPlano: fotosPara(''),
  }
}