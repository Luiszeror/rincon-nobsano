import imageUrlBuilder from '@sanity/image-url'
import { client } from './client'

const builder = imageUrlBuilder(client)

/*
  Genera la URL de una imagen ya optimizada por Sanity:
  redimensionada, comprimida y en formato moderno (webp/avif)
  automáticamente según el tamaño solicitado. Así el sitio
  nunca sirve fotos pesadas sin necesidad de comprimirlas a mano.
*/
export function urlFor(source, { width = 1200, quality = 75 } = {}) {
  if (!source) return null
  return builder.image(source).width(width).quality(quality).auto('format').url()
}
