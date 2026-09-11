'use client'
import { useState } from 'react'
import ModalImagen from './ModalImagen'

export default function FotoMenuFisico({ fotos = [] }) {
  const [actual, setActual] = useState(0)
  const [verGrande, setVerGrande] = useState(false)

  if (fotos.length === 0) {
    return (
      <div className="menu-fisico-vacio">
        <span style={{ fontSize: 40 }}>📋</span>
        <p>Espacio para fotos del menú físico</p>
      </div>
    )
  }

  const total = fotos.length

  return (
    <>
      <div className="carrusel" style={{ marginBottom: 24 }}>
        <button
          className="menu-fisico-foto-btn"
          onClick={() => setVerGrande(true)}
          aria-label="Ver en grande"
        >
          <img
            src={fotos[actual]}
            alt="Menú físico"
            style={{ width: '100%', height: 400, objectFit: 'contain', background: '#fff' }}
          />
          <span className="menu-fisico-lupa">🔍</span>
        </button>

        {total > 1 && (
          <>
            <button
              className="carrusel-btn prev"
              onClick={(e) => { e.stopPropagation(); setActual(a => (a - 1 + total) % total) }}
              aria-label="Anterior"
            >‹</button>
            <button
              className="carrusel-btn next"
              onClick={(e) => { e.stopPropagation(); setActual(a => (a + 1) % total) }}
              aria-label="Siguiente"
            >›</button>
            <div className="carrusel-puntos">
              {fotos.map((_, i) => (
                <button key={i} className={`punto ${i === actual ? 'activo' : ''}`} onClick={(e) => { e.stopPropagation(); setActual(i) }} />
              ))}
            </div>
          </>
        )}
      </div>

      {verGrande && (
        <ModalImagen src={fotos[actual]} titulo="Menú físico" onClose={() => setVerGrande(false)} />
      )}
    </>
  )
}