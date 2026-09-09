'use client'
import { useState } from 'react'
import ModalPlato from './ModalPlato'

/*
  Menú acordeón de un solo nivel (cafés).
  Solo UNA categoría abierta a la vez.
  Cada plato es clickeable y abre el modal de detalle.
*/
export default function Menu({ categorias = [] }) {
  const [abierta, setAbierta] = useState(null)
  const [platoActivo, setPlatoActivo] = useState(null)

  if (categorias.length === 0) {
    return (
      <div className="menu-fisico-vacio">
        <span style={{ fontSize: 40 }}>🍽</span>
        <p>Aún no hay platos cargados para esta sede</p>
      </div>
    )
  }

  const alternar = (i) => setAbierta(prev => (prev === i ? null : i))

  return (
    <div className="menu-acordeon">
      {categorias.map((cat, i) => (
        <div key={i} className={`menu-cat ${abierta === i ? 'abierta' : ''}`}>
          <button className="menu-cat-head" onClick={() => alternar(i)}>
            <span className="nombre">{cat.icono} {cat.nombre}</span>
            <span className="chevron">▼</span>
          </button>
          <div className="menu-cat-body">
            <div className="menu-grid">
              {cat.platos.map((p, j) => (
                <button key={j} className="plato-card plato-card--clic" onClick={() => setPlatoActivo(p)}>
                  <span className="plato-emoji">{p.emoji || '🍽'}</span>
                  <div className="plato-info">
                    <h4>{p.nombre}</h4>
                    {p.desc && <p className="desc">{p.desc}</p>}
                    {p.precio && <span className="precio">{p.precio}</span>}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      ))}

      <ModalPlato plato={platoActivo} onClose={() => setPlatoActivo(null)} />
    </div>
  )
}