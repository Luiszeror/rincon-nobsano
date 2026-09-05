'use client'
import { useState, useRef, useEffect } from 'react'
import ModalPlato from './ModalPlato'

/*
  Menú acordeón: solo se ven las líneas (categorías),
  al hacer clic se despliega la sección con sus platos.
  Cada plato: { nombre, desc, precio, emoji }

  La altura de apertura se mide en tiempo real con `scrollHeight`
  (en vez de un max-height fijo), así la animación es rápida y
  proporcional al contenido, y cierra de forma limpia.
*/
function CategoriaAcordeon({ cat, abierta, onToggle }) {
  const bodyRef = useRef(null)
  const [altura, setAltura] = useState(0)

  useEffect(() => {
    if (!bodyRef.current) return
    if (abierta) {
      setAltura(bodyRef.current.scrollHeight)
    } else {
      setAltura(0)
    }
  }, [abierta])

  // Si cambia el tamaño de ventana con la categoría abierta, recalcula
  useEffect(() => {
    if (!abierta) return
    const onResize = () => {
      if (bodyRef.current) setAltura(bodyRef.current.scrollHeight)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [abierta])

  return (
    <div className={`menu-cat ${abierta ? 'abierta' : ''}`}>
      <button className="menu-cat-head" onClick={onToggle}>
        <span className="nombre">{cat.icono} {cat.nombre}</span>
        <span className="chevron">▼</span>
      </button>
      <div className="menu-cat-body" style={{ maxHeight: altura }}>
        <div className="menu-grid" ref={bodyRef}>
          {cat.platos.map((p, j) => (
            <div key={j} className="plato-card">
              <span className="plato-emoji">{p.emoji || '🍽'}</span>
              <div className="plato-info">
                <h4>{p.nombre}</h4>
                {p.desc && <p className="desc">{p.desc}</p>}
                {p.precio && <span className="precio">{p.precio}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Menu({ categorias }) {
  const [abierta, setAbierta] = useState(null)
  const [platoActivo, setPlatoActivo] = useState(null)

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