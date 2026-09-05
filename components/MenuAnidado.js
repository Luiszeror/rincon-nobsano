'use client'
import { useState, useRef, useEffect } from 'react'
import FotoMenuFisico from './FotoMenuFisico'
import ModalPlato from './ModalPlato'
/*
  Menú anidado de dos niveles para El Rincón Nobsano:
  Sección principal (ej: "Platos a la Carta") → Subsección (ej: "Carnes") → Platos.
  Ambos niveles se despliegan igual que el acordeón simple: la altura
  se mide con scrollHeight en tiempo real, así abre/cierra rápido y sin bugs.
*/

function Subseccion({ sub, abierta, onToggle }) {
  const bodyRef = useRef(null)
  const [altura, setAltura] = useState(0)

  useEffect(() => {
    if (!bodyRef.current) return
    setAltura(abierta ? bodyRef.current.scrollHeight : 0)
  }, [abierta])

  return (
    <div className={`submenu-cat ${abierta ? 'abierta' : ''}`}>
      <button className="submenu-cat-head" onClick={onToggle}>
        <span className="nombre">{sub.nombre}</span>
        <span className="chevron">▼</span>
      </button>
      <div className="menu-cat-body" style={{ maxHeight: altura }}>
        <div className="menu-grid" ref={bodyRef}>
          {sub.platos.map((p, j) => (
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

function SeccionPrincipal({ seccion, abierta, onToggle, subAbiertas, onToggleSub }) {
  const bodyRef = useRef(null)
  const [altura, setAltura] = useState(0)

  useEffect(() => {
    if (!bodyRef.current) return
    setAltura(abierta ? bodyRef.current.scrollHeight : 0)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [abierta, subAbiertas])

  return (
    <div className={`menu-cat ${abierta ? 'abierta' : ''}`}>
      <button className="menu-cat-head" onClick={onToggle}>
        <span className="nombre">{seccion.icono} {seccion.nombre}</span>
        <span className="chevron">▼</span>
      </button>
      <div className="menu-cat-body" style={{ maxHeight: altura }}>
        <div className="submenu-wrap" ref={bodyRef}>
          <FotoMenuFisico fotos={seccion.fotosMenu || []} />
          {seccion.subsecciones.map((sub, i) => (
            <Subseccion
              key={i}
              sub={sub}
              abierta={subAbiertas.includes(i)}
              onToggle={() => onToggleSub(i)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function MenuAnidado({ secciones }) {
  const [abierta, setAbierta] = useState(null)
  const [subAbierta, setSubAbierta] = useState(null)
  const [platoActivo, setPlatoActivo] = useState(null)

  const toggleSeccion = (i) => {
    setAbierta(prev => (prev === i ? null : i))
    setSubAbierta(null)
  }

  const toggleSub = (j) => {
    setSubAbierta(prev => (prev === j ? null : j))
  }

  return (
    <div className="menu-acordeon">
      {secciones.map((seccion, i) => (
        <div key={i} className={`menu-cat ${abierta === i ? 'abierta' : ''}`}>
          <button className="menu-cat-head" onClick={() => toggleSeccion(i)}>
            <span className="nombre">{seccion.icono} {seccion.nombre}</span>
            <span className="chevron">▼</span>
          </button>
          <div className="menu-cat-body">
            <div className="submenu-wrap">
              <FotoMenuFisico fotos={seccion.fotosMenu || []} />
              {seccion.subsecciones.map((sub, j) => (
                <div key={j} className={`submenu-cat ${subAbierta === j ? 'abierta' : ''}`}>
                  <button className="submenu-cat-head" onClick={() => toggleSub(j)}>
                    <span className="nombre">{sub.nombre}</span>
                    <span className="chevron">▼</span>
                  </button>
                  <div className="menu-cat-body">
                    <div className="menu-grid">
                      {sub.platos.map((p, k) => (
                        <button
                          key={k}
                          className="plato-card plato-card--clic"
                          onClick={() => setPlatoActivo(p)}
                        >
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
            </div>
          </div>
        </div>
      ))}

      <ModalPlato plato={platoActivo} onClose={() => setPlatoActivo(null)} />
    </div>
  )
}