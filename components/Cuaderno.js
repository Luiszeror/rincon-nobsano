'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Cuaderno({ activo, children }) {
  const router = useRouter()
  const [volteando, setVolteando] = useState(false)

  const pestanas = [
    { id: 'nobsa', label: 'Nobsa', href: '/' },
    { id: 'mongui', label: 'Monguí', href: '/mongui' },
    { id: 'paipa', label: 'Paipa', href: '/paipa' },
    { id: 'proximamente', label: 'Próximamente', href: '/proximamente' },
  ]

  function irA(p) {
    if (p.id === activo || volteando) return
    setVolteando(true)
    setTimeout(() => router.push(p.href), 260)
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
            <button
              key={p.id}
              className={`separador ${
                p.id === activo ? 'activo'
                : p.id === 'proximamente' ? 'proximamente'
                : 'inactivo'
              }`}
              onClick={() => irA(p)}
            >{p.label}</button>
          ))}
        </div>
        <div className="pagina-contenido">{children}</div>
      </div>
    </div>
  )
}
