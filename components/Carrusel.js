'use client'
import { useState } from 'react'

/*
  Carrusel de ambiente. Slides de demostración con emoji.
  Cuando tengan fotos reales del local, reemplazar el <span className="icono">
  por <img src="/fotos/nombre.jpg" style={{width:'100%',height:'100%',objectFit:'cover'}} />
  IMPORTANTE: el carrusel NO usa cafe_pred.jpg — esa imagen es exclusiva
  del respaldo automático en la sección de Anuncios.
*/
export default function Carrusel({ slides }) {
  const [actual, setActual] = useState(0)
  const total = slides.length

  return (
    <div className="carrusel">
      <div className="carrusel-vista" style={{ transform: `translateX(-${actual * 100}%)` }}>
        {slides.map((s, i) => (
          <div key={i} className="carrusel-slide">
            <span className="icono">{s.icono}</span>
            <span className="stitulo">{s.titulo}</span>
            <span className="stexto">{s.texto}</span>
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
