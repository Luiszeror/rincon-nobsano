import Cuaderno from '../../components/Cuaderno'
import CafeLaRuana from '../../components/CafeLaRuana'
import BotonesFlotantes from '../../components/BotonesFlotantes'
import { getContenidoLocal } from '../../lib/sanity/queries'

export default async function PaginaParaderoPaipa() {
  const cafePaipa = await getContenidoLocal('cafe-paipa')

  return (
    <>
      <Cuaderno activo="paipa">
        <CafeLaRuana
          cabecera
          nombreLocal="Estación Café La Ruana"
          sede="Paipa"
          productosEstrella={cafePaipa.productosEstrella}
          slides={cafePaipa.ambiente}
          anuncios={cafePaipa.anuncios}
          horarios={cafePaipa.horarios}
          menuCategorias={cafePaipa.menuPlano}
          ubicacion={{
            titulo: 'Paradero Paipa, Boyacá',
            descripcion: 'Sobre la vía Nobsa–Paipa, nuestro café es la parada ideal para viajeros que van o vienen de las termales y el Lago de Sochagota.',
            direccion: 'Vía Paipa, Paradero Paipa, Boyacá',
            mapsQuery: 'Paradero Paipa Boyaca',
          }}
          contactos={cafePaipa.contactos}
        />
      </Cuaderno>
      <BotonesFlotantes whatsapp="+57 3215426830" />
    </>
  )
}