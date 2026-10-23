import CafeLaRuana from './CafeLaRuana'

/*
  Café La Ruana — Nobsa, con su divisor "También en Nobsa".
  Recibe el contenido ya traído de Sanity (getContenidoLocal('cafe-nobsa')).
*/
export default function CafeNobsa({ contenido }) {
  return (
    <>
      <div className="divisor-local">
        <div className="linea" />
        <span className="sello">✦ También en Nobsa ✦</span>
        <div className="linea" />
      </div>

      <CafeLaRuana
        cabecera
        sede="Nobsa"
        productosEstrella={contenido.productosEstrella}
        slides={contenido.ambiente}
        anuncios={contenido.anuncios}
        horarios={contenido.horarios}
        menuCategorias={contenido.menuPlano}
        fotosMenu={contenido.fotosMenuPlano}
        ubicacion={{
          titulo: 'Villa del Artesano, Nobsa',
          descripcion: 'A pasos de los talleres artesanales de Nobsa, entre ruanas y telares, nuestro café es el punto de encuentro de artesanos y viajeros.',
          direccion: 'Carrera 3 # 7-45, Villa del Artesano, Nobsa',
          mapsQuery: 'Villa del Artesano Nobsa Boyaca',
        }}
        contactos={contenido.contactos}
      />
    </>
  )
}