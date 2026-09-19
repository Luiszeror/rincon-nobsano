import imageUrlBuilder from '@sanity/image-url'
import { client } from './client'

const builder = imageUrlBuilder(client)

/*
  Devuelve el "builder" de Sanity para una imagen. A partir de aquí
  se pueden pedir tamaños y recortes específicos, respetando el
  hotspot que se marcó al subir la foto en el Studio.
*/
export function urlFor(source) {
  if (!source) return null
  return builder.image(source)
}