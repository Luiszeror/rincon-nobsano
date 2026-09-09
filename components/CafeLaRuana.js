'use client'
import ProductosEstrella from './ProductosEstrella'
import Carrusel from './Carrusel'
import Menu from './Menu'
import { TituloSeccion, Anuncios, Horarios, Ubicacion, Contactos } from './Secciones'
import FotoMenuFisico from './FotoMenuFisico'
import LogoMarca from '../components/LogoMarca'

export default function CafeLaRuana({
  sede, nombreLocal, slides, anuncios, horarios, ubicacion, contactos,
  cabecera, productosEstrella, menuCategorias, fotosMenu,
}) {
  return (
    <section>
      {cabecera && (
        <div className="cabecera-local">
          <LogoMarca src="/CAFELOGO.png" />
          <h1>{nombreLocal || 'Café La Ruana'}</h1>
          <span className="subtitulo">☕ {sede} · Boyacá</span>
        </div>
      )}

      <TituloSeccion>Productos estrella</TituloSeccion>
      <ProductosEstrella productos={productosEstrella} />

      <TituloSeccion>Nuestro ambiente</TituloSeccion>
      <Carrusel slides={slides} />

      <TituloSeccion>Anuncios</TituloSeccion>
      <Anuncios items={anuncios} />

      <TituloSeccion>Horarios</TituloSeccion>
      <Horarios items={horarios} />

      <TituloSeccion>Menú</TituloSeccion>
      {fotosMenu !== undefined && <FotoMenuFisico fotos={fotosMenu} />}
      <Menu categorias={menuCategorias} />

      <TituloSeccion>Ubicación</TituloSeccion>
      <Ubicacion {...ubicacion} />

      <TituloSeccion>Contactos</TituloSeccion>
      <Contactos {...contactos} />
    </section>
  )
}