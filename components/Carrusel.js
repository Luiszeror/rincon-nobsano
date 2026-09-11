'use client'
import { useState } from 'react'

/*
  Carrusel de ambiente. Cuando hay foto real (de Sanity), se muestra
  de fondo con un panel de texto sobre degradado oscuro — a la derecha
  en pantallas grandes, abajo (con texto más pequeño) en móvil.
  Sin foto real, cae al emoji de relleno centrado.
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
          <div key={i} className="carrusel-slide">
            {s.imagen ? (
              <>
                <img src={s.imagen} alt={s.titulo || 'Foto del local'} className="carrusel-img" />
                <div className="carrusel-texto-shadow">
                  <span className="stitulo">{s.titulo}</span>
                  <span className="stexto">{s.texto}</span>
                </div>
              </>
            ) : (
              <>
                <span className="icono">{s.icono || '📷'}</span>
                <span className="stitulo">{s.titulo}</span>
                <span className="stexto">{s.texto}</span>
              </>
            )}
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