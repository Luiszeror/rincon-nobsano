'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Cuaderno({ activo, children }) {
  const router = useRouter()
  const [volteando, setVolteando] = useState(false)

  const pestanas = [
    { id: 'nobsa', label: 'Nobsa', href: '/' },
    { id: 'nobsa-cafe', label: 'Nobsa-Café', href: '/nobsa-cafe' },
    { id: 'mongui', label: 'Monguí', href: '/mongui' },
    { id: 'paipa', label: 'Paipa', href: '/paipa' },
    { id: 'proximamente', label: 'Próximamente', href: '/proximamente' },
  ]

  function irA(p) {
    if (p.id === activo || volteando) return
    setVolteando(true)
    setTimeout(() => router.push(p.href), 260)
  }

  function alHacerClic(e, p) {
    // Ctrl/Cmd/Shift o clic medio: dejar que el navegador abra el enlace normal
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return
    e.preventDefault()
    irA(p)
  }

  return (
    <div className="cuaderno-wrap">
      <div className={`cuaderno ${volteando ? 'volteando' : 'entrando'}`}>
        <div className="anillas">
          {[...Array(9)].map((_, i) => <div key={i} className="anilla" />)}
        </div>
        <div className="margen-cuaderno" />
        <div className="separadores">
          {pestanas.map(p => (
            <a
              key={p.id}
              href={p.href}
              aria-current={p.id === activo ? 'page' : undefined}
              className={`separador ${
                p.id === activo ? 'activo'
                : p.id === 'proximamente' ? 'proximamente'
                : 'inactivo'
              }`}
              onClick={(e) => alHacerClic(e, p)}
            >{p.label}</a>
          ))}
        </div>
        <div className="pagina-contenido">{children}</div>
      </div>
    </div>
  )
}