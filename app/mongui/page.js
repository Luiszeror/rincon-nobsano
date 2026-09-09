import Cuaderno from '../../components/Cuaderno'
import CafeLaRuana from '../../components/CafeLaRuana'
import BotonesFlotantes from '../../components/BotonesFlotantes'
import { getContenidoLocal } from '../../lib/sanity/queries'

export default async function PaginaMongui() {
  const cafeMongui = await getContenidoLocal('cafe-mongui')

  return (
    <>
      <Cuaderno activo="mongui">
        <CafeLaRuana
          cabecera
          sede="Monguí"
          productosEstrella={cafeMongui.productosEstrella}
          slides={cafeMongui.ambiente}
          anuncios={cafeMongui.anuncios}
          horarios={cafeMongui.horarios}
          menuCategorias={cafeMongui.menuPlano}
          fotosMenu={cafeMongui.fotosMenuPlano}
          ubicacion={{
            titulo: 'Monguí, Boyacá',
            descripcion: 'Monguí, declarado uno de los pueblos más lindos de Colombia, encanta con su arquitectura colonial, su basílica de piedra y su cercanía al majestuoso Páramo de Ocetá. Nuestro café está frente a la plaza principal.',
            direccion: 'Carrera 2 # 3-10, Plaza Principal, Monguí',
            mapsQuery: 'Plaza Principal Mongui Boyaca',
          }}
          contactos={cafeMongui.contactos}
        />
      </Cuaderno>
      <BotonesFlotantes whatsapp="+57 3215426830" />
    </>
  )
}