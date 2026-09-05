'use client'
/*
  Bloque completo de un local "Café La Ruana".
  Reutilizado en Nobsa, Monguí y Paradero Paipa.
  Orden: Productos Estrella → Ambiente → Anuncios → Horarios → Menú → Ubicación → Contactos
*/
import ProductosEstrella from './ProductosEstrella'
import Carrusel from './Carrusel'
import Menu from './Menu'
import { TituloSeccion, Anuncios, Horarios, Ubicacion, Contactos } from './Secciones'
import { menuCafeLaRuana } from '../data/menuCafeLaRuana'
import FotoMenuFisico from './FotoMenuFisico'

const PRODUCTOS_ESTRELLA_CAFE = [
  { nombre: 'Café de especialidad', desc: 'Grano seleccionado de origen boyacense, tostado artesanalmente. Nuestra insignia.', emoji: '☕' },
  { nombre: 'Milhojas de Nutella', desc: 'Capas crujientes de hojaldre rellenas de Nutella, para los amantes del chocolate.', emoji: '🥮' },
  { nombre: 'Milhojas de Arequipe', desc: 'Hojaldre artesanal relleno de arequipe casero, hecho al momento.', emoji: '🥮' },
  { nombre: 'Milhojas de Frutos Rojos', desc: 'Hojaldre crujiente con mermelada de frutos rojos frescos de la región.', emoji: '🥮' },
  { nombre: 'Migao Boyacense', desc: 'Receta tradicional de maíz, típica de las cocinas boyacenses de siempre.', emoji: '🌽' },
  { nombre: 'Merengón Artesanal', desc: 'Suave merengue casero con crema chantilly y fruta fresca de la región.', emoji: '🍰' },
]

export default function CafeLaRuana({ sede, nombreLocal, slides, anuncios, horarios, ubicacion, contactos, cabecera, fotosMenu }) {  return (
    <section>
      {cabecera && (
        <div className="cabecera-local">
          <img src="/CAFELOGO.png" alt="" className="logo-marca"
            onError={(e) => { e.currentTarget.style.display = 'none' }} />
          <h1>{nombreLocal || 'Café La Ruana'}</h1>
          <span className="subtitulo">☕ {sede} · Boyacá</span>
        </div>
      )}



      <TituloSeccion>Productos estrella</TituloSeccion>
      <ProductosEstrella productos={PRODUCTOS_ESTRELLA_CAFE} />

      <TituloSeccion>Nuestro ambiente</TituloSeccion>
      <Carrusel slides={slides} />

       <TituloSeccion>Menú</TituloSeccion>
      {fotosMenu !== undefined && <FotoMenuFisico fotos={fotosMenu} />}
      <Menu categorias={menuCafeLaRuana} />

      <TituloSeccion>Anuncios</TituloSeccion>
      <Anuncios items={anuncios} />

      <TituloSeccion>Horarios</TituloSeccion>
      <Horarios items={horarios} />

      <TituloSeccion>Ubicación</TituloSeccion>
      <Ubicacion {...ubicacion} />

      <TituloSeccion>Contactos</TituloSeccion>
      <Contactos {...contactos} />
    </section>
  )
}
