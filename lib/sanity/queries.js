import { client } from './client'

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
      seccionPrincipal, categoria, nombre, "desc": descripcion, "imagen": imagen.asset->url
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
    const categorias = [...new Set((data.platos || []).map(p => p.categoria))]
    return categorias.map(nombre => ({
      nombre,
      icono: ICONOS[nombre] || '☕',
      platos: (data.platos || []).filter(p => p.categoria === nombre),
    }))
  }

  // ── Menú anidado (restaurante): agrupa por `seccionPrincipal` → `categoria` ──
  const menuAnidado = () => {
    const secciones = [...new Set((data.platos || []).map(p => p.seccionPrincipal).filter(Boolean))]
    return secciones.map(nombreSeccion => {
      const platosSeccion = (data.platos || []).filter(p => p.seccionPrincipal === nombreSeccion)
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