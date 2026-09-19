'use client'

/*
  Imagen con respaldo automático: si la foto no carga o no existe,
  muestra /cafe_pred.jpg en su lugar.
*/
export default function ImagenConRespaldo({ src, alt }) {
  return (
    <img
      src={src || '/cafe_pred.jpg'}
      alt={alt || 'Imagen'}
      style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 10 }}
      onError={(e) => { e.currentTarget.src = '/cafe_pred.jpg' }}
    />
  )
}