'use client'
import { createPortal } from 'react-dom'

export default function ModalPlato({ plato, onClose }) {
  if (!plato) return null

  const modal = (
    <div
      className="modal-fondo"
      onClick={onClose}
      onKeyDown={(e) => { if (e.key === 'Escape') onClose() }}
    >
      <div className="modal-caja" onClick={(e) => e.stopPropagation()}>
        <button className="modal-cerrar" onClick={onClose} aria-label="Cerrar">✕</button>
        <div className="modal-imagen">
          {plato.imagen
            ? <img src={plato.imagen} alt={plato.nombre} />
            : <span style={{ fontSize: 90 }}>{plato.emoji || '🍽'}</span>
          }
        </div>
        <div className="modal-info">
          <h3>{plato.nombre}</h3>
          {plato.desc && <p>{plato.desc}</p>}
          {plato.precio && <span className="modal-precio">{plato.precio}</span>}
        </div>
      </div>
    </div>
  )

  return createPortal(modal, document.body)
}