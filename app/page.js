'use client'
import Cuaderno from '../components/Cuaderno'
import Carrusel from '../components/Carrusel'
import MenuAnidado from '../components/MenuAnidado'
import ProductosEstrella from '../components/ProductosEstrella'
import CafeLaRuana from '../components/CafeLaRuana'
import BotonesFlotantes from '../components/BotonesFlotantes'
import { TituloSeccion, Anuncios, Horarios, Ubicacion, Contactos } from '../components/Secciones'
import { menuRinconNobsano } from '../data/menuRinconNobsano'

const PRODUCTOS_ESTRELLA_RINCON = [
  { nombre: 'Café de especialidad', desc: 'Grano seleccionado de origen boyacense, tostado artesanalmente para acompañar cada comida.', emoji: '☕' },
  { nombre: 'Milhojas de Nutella', desc: 'Capas crujientes de hojaldre rellenas de Nutella, para los amantes del chocolate.', emoji: '🥮' },
  { nombre: 'Milhojas de Arequipe', desc: 'Hojaldre artesanal relleno de arequipe casero, hecho al momento.', emoji: '🥮' },
  { nombre: 'Milhojas de Frutos Rojos', desc: 'Hojaldre crujiente con mermelada de frutos rojos frescos de la región.', emoji: '🥮' },
  { nombre: 'Migao Boyacense', desc: 'Receta tradicional de maíz que representa la esencia de la cocina de Boyacá.', emoji: '🌽' },
  { nombre: 'Merengón Artesanal', desc: 'Suave merengue casero con crema chantilly y fruta fresca de la región.', emoji: '🍰' },
]

export default function PaginaNobsa() {
  return (
    <>
    <Cuaderno activo="nobsa">

      {/* ═══════════ EL RINCÓN NOBSANO ═══════════ */}
      <div className="cabecera-local">
        <img src="/RINCONLOGO.png" alt="" className="logo-marca"
          onError={(e) => { e.currentTarget.style.display = 'none' }} />
        <h1>El Rincón Nobsano</h1>
        <span className="subtitulo">🍽 Nobsa · Boyacá</span>
      </div>

      <TituloSeccion>Productos estrella</TituloSeccion>
      <ProductosEstrella productos={PRODUCTOS_ESTRELLA_RINCON} />

      <TituloSeccion>Nuestro ambiente</TituloSeccion>
      <Carrusel slides={[
        { icono: '🏡', titulo: 'Fachada tradicional', texto: 'Foto del local — se reemplazará con fotografía real' },
        { icono: '🍲', titulo: 'Nuestra cocina', texto: 'Foto del ambiente interior' },
        { icono: '🌄', titulo: 'Vista a Nobsa', texto: 'Foto de la terraza y paisaje' },
        { icono: '👨‍🍳', titulo: 'Nuestro equipo', texto: 'Foto del personal en acción' },
      ]} />

      <TituloSeccion>Anuncios</TituloSeccion>
      <Anuncios items={[
        {
          fecha: 'Julio 2026',
          titulo: '¡Nueva sede de Café La Ruana en Paradero Paipa!',
          texto: 'Nos complace anunciar la apertura de nuestra nueva sede sobre la vía a Paipa. Ven a conocerla y disfruta del mejor café boyacense. Este espacio es editable: el restaurante podrá publicar texto acompañado de imagen o video.',
          media: '🎉',
        },
        {
          fecha: 'Junio 2026',
          titulo: 'Domingos de puchero boyacense',
          texto: 'Todos los domingos, nuestro tradicional puchero con receta de la abuela. Porciones familiares disponibles. Reserva tu mesa por WhatsApp.',
          media: '🍲',
        },
      ]} />

      <TituloSeccion>Horarios</TituloSeccion>
      <Horarios items={[
        { dia: 'Lunes a Viernes', hora: '7:00 am — 9:00 pm' },
        { dia: 'Sábados', hora: '6:30 am — 10:00 pm' },
        { dia: 'Domingos y festivos', hora: '6:30 am — 9:00 pm' },
      ]} />

      <TituloSeccion>Menú</TituloSeccion>
      <MenuAnidado secciones={menuRinconNobsano} />

      <TituloSeccion>Ubicación</TituloSeccion>
      <Ubicacion
        titulo="Nobsa, Boyacá"
        descripcion="Nobsa es un municipio orgulloso del altiplano boyacense, mundialmente conocido por sus ruanas artesanales, su tradición siderúrgica y su hermosa plaza principal. Nuestro restaurante está en pleno corazón del pueblo, a pasos de la iglesia y los talleres de tejido."
        direccion="Calle 5 # 4-12, Parque Principal, Nobsa"
        mapsQuery="Parque Principal Nobsa Boyaca"
      />

      <TituloSeccion>Contactos</TituloSeccion>
      <Contactos
        whatsapp="+57 300 000 0000"
        instagram="@rinconnobsano"
        correo="info@rinconnobsano.com"
      />

      {/* ═══════════ DIVISOR ═══════════ */}
      <div className="divisor-local">
        <div className="linea" />
        <span className="sello">✦ También en Nobsa ✦</span>
        <div className="linea" />
      </div>

      {/* ═══════════ CAFÉ LA RUANA (NOBSA) ═══════════ */}
      <CafeLaRuana
        cabecera
        sede="Nobsa"
        fotosMenu={[]}  
        slides={[
          { icono: '☕', titulo: 'Barra de café', texto: 'Foto del mostrador y la barra' },
          { icono: '🧣', titulo: 'Rincón de las ruanas', texto: 'Foto de la decoración artesanal' },
          { icono: '🪑', titulo: 'Espacio interior', texto: 'Foto de las mesas y el ambiente' },
        ]}
        anuncios={[
          {
            fecha: 'Julio 2026',
            titulo: 'Catas de café los viernes',
            texto: 'Cada viernes a las 5 pm, cata guiada de cafés de origen boyacense. Cupos limitados, inscríbete por WhatsApp.',
            media: '☕',
          },
        ]}
        horarios={[
          { dia: 'Lunes a Viernes', hora: '6:30 am — 7:00 pm' },
          { dia: 'Sábados y Domingos', hora: '6:00 am — 8:00 pm' },
        ]}
        ubicacion={{
          titulo: 'Villa del Artesano, Nobsa',
          descripcion: 'A pasos de los talleres artesanales de Nobsa, entre ruanas y telares, nuestro café es el punto de encuentro de artesanos y viajeros.',
          direccion: 'Carrera 3 # 7-45, Villa del Artesano, Nobsa',
          mapsQuery: 'Villa del Artesano Nobsa Boyaca',
        }}
        contactos={{
          whatsapp: '+57 300 000 0001',
          instagram: '@cafelaruana',
          correo: 'nobsa@cafelaruana.com',
        }}
      />

    </Cuaderno>
      <BotonesFlotantes whatsapp="+573000000000" />
    </>
  )
}
