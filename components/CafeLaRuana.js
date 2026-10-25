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
  proximamente, videoEspera,
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

      {proximamente && (
        <div className="pronto-pantalla">
          {videoEspera && (
            <video className="pronto-video" src={videoEspera} autoPlay muted loop playsInline />
          )}
          <div className="pronto-velo">
            <span className="pronto-sello">✦ Muy pronto ✦</span>
            <h2>Esperamos en Paipa pronto</h2>
            <p>Estamos preparando nuestra sede con todo el sabor de Café La Ruana.</p>
          </div>
        </div>
      )}

      <TituloSeccion>Ubicación</TituloSeccion>
      <Ubicacion {...ubicacion} />

      <TituloSeccion>Nuestro ambiente</TituloSeccion>
      <Carrusel slides={slides} />

      <TituloSeccion>Menú</TituloSeccion>
      {fotosMenu !== undefined && <FotoMenuFisico fotos={fotosMenu} />}
      <Menu categorias={menuCategorias} />

      <TituloSeccion>Productos estrella</TituloSeccion>
      <ProductosEstrella productos={productosEstrella} />

      <TituloSeccion>Horarios</TituloSeccion>
      <Horarios items={horarios} />

      <TituloSeccion>Anuncios</TituloSeccion>
      <Anuncios items={anuncios} />

      <TituloSeccion>Contactos</TituloSeccion>
      <Contactos {...contactos} />
    </section>
  )
}