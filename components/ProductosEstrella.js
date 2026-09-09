'use client'
import { useState } from 'react'

/*
  Carrusel de Productos Estrella.
  Cada producto: { nombre, desc, emoji?, imagen? }
  Si `imagen` viene de Sanity (URL real), se usa esa foto.
  Si no, se muestra el emoji de relleno.
*/
export default function ProductosEstrella({ productos = [] }) {
  const [actual, setActual] = useState(0)

  if (productos.length === 0) {
    return (
      <div className="menu-fisico-vacio">
        <span style={{ fontSize: 40 }}>⭐</span>
        <p>Aún no hay productos estrella cargados para esta sede</p>
      </div>
    )
  }

  const total = productos.length
  const p = productos[actual]

  return (
    <div className="prod-estrella">
      <div className="prod-estrella-slide">
        <div className="prod-img">
          {p.imagen ? (
            <img src={p.imagen} alt={p.nombre} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          ) : (
            <span>{p.emoji || '🍽'}</span>
          )}
        </div>
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