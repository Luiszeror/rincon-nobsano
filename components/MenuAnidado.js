'use client'
import { useState } from 'react'
import FotoMenuFisico from './FotoMenuFisico'
import ModalPlato from './ModalPlato'

/*
  Menú anidado de 2 niveles del restaurante.
  Solo una sección y una subsección abiertas a la vez.
  Cada plato es clickeable y abre el modal de detalle.
*/
export default function MenuAnidado({ secciones = [] }) {
  const [abierta, setAbierta] = useState(null)
  const [subAbierta, setSubAbierta] = useState(null)
  const [platoActivo, setPlatoActivo] = useState(null)

  if (secciones.length === 0) {
    return (
      <div className="menu-fisico-vacio">
        <span style={{ fontSize: 40 }}>🍽</span>
        <p>Aún no hay platos cargados para esta sede</p>
      </div>
    )
  }

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
              {(seccion.subsecciones || []).map((sub, j) => (
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
                          <div className="plato-foto">
  {p.imagen ? <img src={p.imagen} alt={p.nombre} /> : (p.emoji || '🍽')}
</div>
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