'use client'

/*
  Logo tipo marca de agua en la cabecera.
  Si el archivo no existe todavía en /public, se oculta solo
  en vez de mostrar el ícono roto del navegador.
*/
export default function LogoMarca({ src, alt = '' }) {
  return (
    <img
      src={src}
      alt={alt}
      className="logo-marca"
      onError={(e) => { e.currentTarget.style.display = 'none' }}
    />
  )
}