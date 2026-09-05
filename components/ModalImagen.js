'use client'

export default function ModalImagen({ src, titulo, onClose }) {
  if (!src) return null

  return (
    <div className="modal-fondo" onClick={onClose}>
      <div className="modal-caja modal-caja--imagen" onClick={(e) => e.stopPropagation()}>
        <button className="modal-cerrar" onClick={onClose} aria-label="Cerrar">✕</button>
        <img src={src} alt={titulo || 'Menú físico'} />
      </div>
    </div>
  )
}