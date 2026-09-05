'use client'

/*
  Ventana flotante que muestra un plato en grande: foto (o imagen
  de respaldo), nombre y descripción completa. Se cierra con la X,
  con la tecla Escape, o haciendo clic fuera del recuadro.
*/
export default function ModalPlato({ plato, onClose }) {
  if (!plato) return null

  return (
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
}