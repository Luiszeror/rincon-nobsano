'use client'
import { useState } from 'react'

/*
  Carrusel de Productos Estrella. Demostración con emoji.
  Cuando tengan fotos reales de cada producto, reemplazar el <span> de .prod-img
  por <img src="/productos/nombre.jpg" style={{width:'100%',height:'100%',objectFit:'cover'}} />
  IMPORTANTE: NO usa cafe_pred.jpg — ese respaldo es exclusivo de Anuncios.
*/
export default function ProductosEstrella({ productos }) {
  const [actual, setActual] = useState(0)
  const total = productos.length
  const p = productos[actual]

  return (
    <div className="prod-estrella">
      <div className="prod-estrella-slide">
        <div className="prod-img"><span>{p.emoji}</span></div>
        <div className="prod-degradado">
          <span className="prod-etiqueta">Producto estrella</span>
          <h3>{p.nombre}</h3>
          <p>{p.desc}</p>
        </div>
      </div>
      <button className="carrusel-btn prev" onClick={() => setActual(a => (a - 1 + total) % total)} aria-label="Anterior">‹</button>
      <button className="carrusel-btn next" onClick={() => setActual(a => (a + 1) % total)} aria-label="Siguiente">›</button>
      <div className="carrusel-puntos">
        {productos.map((_, i) => (
          <button key={i} className={`punto ${i === actual ? 'activo' : ''}`} onClick={() => setActual(i)} aria-label={`Producto ${i+1}`} />
        ))}
      </div>
    </div>
  )
}
