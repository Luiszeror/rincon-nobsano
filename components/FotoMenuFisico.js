'use client'
import { useState } from 'react'

/*
  Espacio para fotos del menú físico impreso.
  Recibe `fotos`: un arreglo de rutas, ej: ['/menu-fisico/nobsa-carta-1.jpg']
  Si el arreglo está vacío, muestra un recuadro vacío listo para llenar.
*/
export default function FotoMenuFisico({ fotos = [] }) {
  const [actual, setActual] = useState(0)

  if (fotos.length === 0) {
    return (
      <div className="menu-fisico-vacio">
        <span style={{ fontSize: 40 }}>📋</span>
        <p>Espacio para fotos del menú físico</p>
      </div>
    )
  }

  return (
    <div className="carrusel" style={{ marginBottom: 24 }}>
      <img
        src={fotos[actual]}
        alt="Menú físico"
        style={{ width: '100%', height: 400, objectFit: 'contain', background: '#fff' }}
      />
      {fotos.length > 1 && (
        <div className="carrusel-puntos">
          {fotos.map((_, i) => (
            <button key={i} className={`punto ${i === actual ? 'activo' : ''}`} onClick={() => setActual(i)} />
          ))}
        </div>
      )}
    </div>
  )
}