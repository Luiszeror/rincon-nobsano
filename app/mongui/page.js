'use client'
import Cuaderno from '../../components/Cuaderno'
import CafeLaRuana from '../../components/CafeLaRuana'
import BotonesFlotantes from '../../components/BotonesFlotantes'

export default function PaginaMongui() {
  return (
    <>
    <Cuaderno activo="mongui">
      <CafeLaRuana
        cabecera
        sede="Monguí"
        fotosMenu={[]} 
        slides={[
          { icono: '⛪', titulo: 'Frente a la Basílica', texto: 'Foto de la vista a la basílica de Monguí' },
          { icono: '🏔️', titulo: 'Aire de páramo', texto: 'Foto del ambiente y la calle empedrada' },
          { icono: '☕', titulo: 'Nuestro café', texto: 'Foto del interior del local' },
        ]}
        anuncios={[
          {
            fecha: 'Julio 2026',
            titulo: 'Bienvenidos viajeros del páramo',
            texto: 'Después de tu caminata al Páramo de Ocetá, te esperamos con chocolate caliente y almojábanas recién horneadas. Espacio editable para promociones, eventos y novedades de la sede.',
            media: '🏔️',
          },
        ]}
        horarios={[
          { dia: 'Lunes a Jueves', hora: '7:00 am — 8:00 pm' },
          { dia: 'Viernes a Domingo', hora: '6:30 am — 9:00 pm' },
        ]}
        ubicacion={{
          titulo: 'Monguí, Boyacá',
          descripcion: 'Monguí, declarado uno de los pueblos más lindos de Colombia, encanta con su arquitectura colonial, su basílica de piedra y su cercanía al majestuoso Páramo de Ocetá. Nuestro café está frente a la plaza principal.',
          direccion: 'Carrera 2 # 3-10, Plaza Principal, Monguí',
          mapsQuery: 'Plaza Principal Mongui Boyaca',
        }}
        contactos={{
          whatsapp: '+57 300 000 0002',
          instagram: '@cafelaruana.mongui',
          correo: 'mongui@cafelaruana.com',
        }}
      />
    </Cuaderno>
      <BotonesFlotantes whatsapp="+573000000000" />
    </>
  )
}