'use client'
import Cuaderno from '../../components/Cuaderno'
import CafeLaRuana from '../../components/CafeLaRuana'
import BotonesFlotantes from '../../components/BotonesFlotantes'

export default function PaginaParaderoPaipa() {
  return (
    <>
    <Cuaderno activo="paipa">
      <CafeLaRuana
        cabecera
        nombreLocal="Estación Café La Ruana"
        sede="Paipa"
        slides={[
          { icono: '🛣️', titulo: 'Sobre la vía a Paipa', texto: 'Foto de la fachada y el parqueadero' },
          { icono: '☕', titulo: 'Nuestro café', texto: 'Foto del interior del local' },
          { icono: '🌄', titulo: 'Vista al lago', texto: 'Foto del paisaje cercano al Lago de Sochagota' },
        ]}
        anuncios={[
          {
            fecha: 'Julio 2026',
            titulo: '¡Gran apertura en Paradero Paipa!',
            texto: 'Nuestra sede más nueva abre sus puertas justo en la vía hacia Paipa. Parada perfecta para un café antes o después de conocer el Lago de Sochagota.',
            media: '🎉',
          },
        ]}
        horarios={[
          { dia: 'Lunes a Viernes', hora: '7:00 am — 7:30 pm' },
          { dia: 'Sábados y Domingos', hora: '6:30 am — 8:30 pm' },
        ]}
        ubicacion={{
          titulo: 'Paradero Paipa, Boyacá',
          descripcion: 'Sobre la vía Nobsa–Paipa, nuestro café es la parada ideal para viajeros que van o vienen de las termales y el Lago de Sochagota.',
          direccion: 'Vía Paipa, Paradero Paipa, Boyacá',
          mapsQuery: 'Paradero Paipa Boyaca',
        }}
        contactos={{
          whatsapp: '+57 300 000 0003',
          instagram: '@cafelaruana.paipa',
          correo: 'paipa@cafelaruana.com',
        }}
      />
    </Cuaderno>
      <BotonesFlotantes whatsapp="+573000000000" />
    </>
  )
}
