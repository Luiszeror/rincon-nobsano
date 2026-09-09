'use client'
import { useState } from 'react'

/*
  Carrusel de ambiente.
  Cada slide: { icono?, titulo, texto, imagen? }
  Si `imagen` viene de Sanity (URL real), se usa esa foto de fondo.
  Si no, se muestra el emoji de relleno centrado.
*/
export default function Carrusel({ slides = [] }) {
  const [actual, setActual] = useState(0)

  if (slides.length === 0) {
    return (
      <div className="menu-fisico-vacio">
        <span style={{ fontSize: 40 }}>📷</span>
        <p>Aún no hay fotos de ambiente cargadas para esta sede</p>
      </div>
    )
  }

  const total = slides.length

  return (
    <div className="carrusel">
      <div className="carrusel-vista" style={{ transform: `translateX(-${actual * 100}%)` }}>
        {slides.map((s, i) => (
          <div key={i} className="carrusel-slide" style={{ position: 'relative' }}>
            {s.imagen ? (
              <img
                src={s.imagen}
                alt={s.titulo || 'Foto del local'}
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
              />
            ) : (
              <span className="icono">{s.icono || '📷'}</span>
            )}
            <span
              className="stitulo"
              style={s.imagen ? { position: 'relative', zIndex: 1, color: '#fff', textShadow: '0 2px 6px rgba(0,0,0,0.7)' } : {}}
            >{s.titulo}</span>
            <span
              className="stexto"
              style={s.imagen ? { position: 'relative', zIndex: 1, color: '#fff', textShadow: '0 2px 6px rgba(0,0,0,0.7)' } : {}}
            >{s.texto}</span>
          </div>
        ))}
      </div>
      <button className="carrusel-btn prev" onClick={() => setActual(a => (a - 1 + total) % total)} aria-label="Anterior">‹</button>
      <button className="carrusel-btn next" onClick={() => setActual(a => (a + 1) % total)} aria-label="Siguiente">›</button>
      <div className="carrusel-puntos">
        {slides.map((_, i) => (
          <button key={i} className={`punto ${i === actual ? 'activo' : ''}`} onClick={() => setActual(i)} aria-label={`Foto ${i+1}`} />
        ))}
      </div>
    </div>
  )
}