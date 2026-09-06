'use client'
import { createPortal } from 'react-dom'

export default function ModalImagen({ src, titulo, onClose }) {
  if (!src) return null

  const modal = (
    <div className="modal-fondo" onClick={onClose}>
      <div className="modal-caja modal-caja--imagen" onClick={(e) => e.stopPropagation()}>
        <button className="modal-cerrar" onClick={onClose} aria-label="Cerrar">✕</button>
        <img src={src} alt={titulo || 'Menú físico'} />
      </div>
    </div>
  )

  return createPortal(modal, document.body)
}