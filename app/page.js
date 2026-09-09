import Cuaderno from '../components/Cuaderno'
import Carrusel from '../components/Carrusel'
import MenuAnidado from '../components/MenuAnidado'
import ProductosEstrella from '../components/ProductosEstrella'
import CafeLaRuana from '../components/CafeLaRuana'
import BotonesFlotantes from '../components/BotonesFlotantes'
import { TituloSeccion, Anuncios, Horarios, Ubicacion, Contactos } from '../components/Secciones'
import { getContenidoLocal } from '../lib/sanity/queries'
import LogoMarca from '../components/LogoMarca'

export default async function PaginaNobsa() {
  const rincon = await getContenidoLocal('rincon-nobsano')
  const cafeNobsa = await getContenidoLocal('cafe-nobsa')

  return (
    <>
      <Cuaderno activo="nobsa">

        <div className="cabecera-local">
          <LogoMarca src="/RINCONLOGO.png" />
          <h1>El Rincón Nobsano</h1>
          <span className="subtitulo">🍽 Nobsa · Boyacá</span>
        </div>

        <TituloSeccion>Productos estrella</TituloSeccion>
        <ProductosEstrella productos={rincon.productosEstrella} />

        <TituloSeccion>Nuestro ambiente</TituloSeccion>
        <Carrusel slides={rincon.ambiente} />

        <TituloSeccion>Anuncios</TituloSeccion>
        <Anuncios items={rincon.anuncios} />

        <TituloSeccion>Horarios</TituloSeccion>
        <Horarios items={rincon.horarios} />

        <TituloSeccion>Menú</TituloSeccion>
        <MenuAnidado secciones={rincon.menuAnidado} />

        <TituloSeccion>Ubicación</TituloSeccion>
        <Ubicacion
          titulo="Nobsa, Boyacá"
          descripcion="Nobsa es un municipio orgulloso del altiplano boyacense, mundialmente conocido por sus ruanas artesanales, su tradición siderúrgica y su hermosa plaza principal."
          direccion="Calle 5 # 4-12, Parque Principal, Nobsa"
          mapsQuery="Parque Principal Nobsa Boyaca"
        />

        <TituloSeccion>Contactos</TituloSeccion>
        <Contactos {...rincon.contactos} />

        <div className="divisor-local">
          <div className="linea" />
          <span className="sello">✦ También en Nobsa ✦</span>
          <div className="linea" />
        </div>

        <CafeLaRuana
          cabecera
          sede="Nobsa"
          productosEstrella={cafeNobsa.productosEstrella}
          slides={cafeNobsa.ambiente}
          anuncios={cafeNobsa.anuncios}
          horarios={cafeNobsa.horarios}
          menuCategorias={cafeNobsa.menuPlano}
          fotosMenu={cafeNobsa.fotosMenuPlano}
          ubicacion={{
            titulo: 'Villa del Artesano, Nobsa',
            descripcion: 'A pasos de los talleres artesanales de Nobsa, entre ruanas y telares, nuestro café es el punto de encuentro de artesanos y viajeros.',
            direccion: 'Carrera 3 # 7-45, Villa del Artesano, Nobsa',
            mapsQuery: 'Villa del Artesano Nobsa Boyaca',
          }}
          contactos={cafeNobsa.contactos}
        />

        <a href="/quienes-somos" className="btn-quienes">
          <h3>¿Quiénes somos?</h3>
          <p>Conoce a nuestros fundadores y la historia detrás de El Rincón Nobsano →</p>
        </a>

      </Cuaderno>
      <BotonesFlotantes whatsapp="+57 3215426830" />
    </>
  )
}