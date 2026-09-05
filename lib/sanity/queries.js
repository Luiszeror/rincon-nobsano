import { client } from './client'

/*
  Trae TODO el contenido editable de una sede en una sola consulta:
  productos estrella, fotos de ambiente, anuncios, horarios,
  menú (agrupado por categoría) y contacto.

  `local` debe ser uno de: 'rincon-nobsano' | 'cafe-nobsa' | 'cafe-mongui' | 'cafe-paradero-paipa'
*/
export async function getContenidoLocal(local) {
  const query = `{
    "productosEstrella": *[_type == "productoEstrella" && local == $local] | order(orden asc) {
      _id, nombre, "desc": descripcion, imagen
    },
    "ambiente": *[_type == "fotoAmbiente" && local == $local] | order(orden asc) {
      _id, titulo, texto, imagen
    },
    "anuncios": *[_type == "anuncio" && local == $local] | order(_createdAt desc) {
      _id, tipo, titulo, texto, fecha, imagen, video
    },
    "platos": *[_type == "plato" && local == $local] | order(categoria asc, orden asc) {
      _id, categoria, nombre, "desc": descripcion, precio, imagen
    },
    "info": *[_type == "local" && id == $local][0] {
      nombreVisible, horarios, contacto
    }
  }`

  const data = await client.fetch(query, { local }, { next: { revalidate: 60 } })

  // Agrupa los platos sueltos en categorías, listas para <Menu categorias={...} />
  const categoriasOrden = ['Platos a la carta', 'Frutería', 'Comidas Rápidas', 'Desayunos', 'Cafetería']
  const iconosCategoria = {
    'Platos a la carta': '🍲', 'Frutería': '🍓', 'Comidas Rápidas': '🍔',
    'Desayunos': '🍳', 'Cafetería': '☕',
  }
  const menu = categoriasOrden
    .map(nombre => ({
      nombre,
      icono: iconosCategoria[nombre],
      platos: (data.platos || []).filter(p => p.categoria === nombre),
    }))
    .filter(cat => cat.platos.length > 0)

  return {
    productosEstrella: data.productosEstrella || [],
    ambiente: data.ambiente || [],
    anuncios: data.anuncios || [],
    menu,
    horarios: data.info?.horarios || [],
    contacto: data.info?.contacto || {},
  }
}
