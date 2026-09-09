'use client'
import Cuaderno from '../../components/Cuaderno'
import BotonesFlotantes from '../../components/BotonesFlotantes'
import { TituloSeccion } from '../../components/Secciones'
import LogoMarca from '../../components/LogoMarca'

export default function PaginaQuienesSomos() {
  return (
    <>
    <Cuaderno activo="nobsa">
      <div className="cabecera-local">
        <img src="/RINCONLOGO.png" alt="" className="logo-marca"
          onError={(e) => { e.currentTarget.style.display = 'none' }} />
        <h1>¿Quiénes somos?</h1>
        <span className="subtitulo">✦ Nuestra historia</span>
      </div>

      <a href="/" style={{
        display: 'inline-block',
        fontFamily: 'Cinzel, serif',
        fontSize: 14, color: 'var(--choco)', textDecoration: 'none',
        border: '2px solid var(--mostaza)', borderRadius: 30,
        padding: '10px 26px', fontWeight: 700, marginBottom: 8,
      }}>← Volver al cuaderno</a>

      <TituloSeccion>Nuestros fundadores</TituloSeccion>
      <div className="fundador-card">
        <div className="fundador-foto">👨‍👩‍🍳</div>
        <h3 style={{ fontFamily: 'Cinzel, serif', color: 'var(--choco)', fontSize: 25, fontWeight: 700, marginBottom: 8 }}>
          Los Fundadores
        </h3>
        <p style={{ fontFamily: 'Cinzel, serif', fontSize: 13, color: '#b8860b', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 18 }}>
          Familia fundadora · El Rincón Nobsano
        </p>
        <p style={{ fontSize: 17, color: '#4c3627', lineHeight: 1.85 }}>
          Aquí irá la fotografía real de los fundadores junto con su reseña:
          su historia, su vínculo con la cocina boyacense, el nacimiento del
          restaurante y el sueño que dio vida al Café La Ruana.
        </p>
      </div>

      <TituloSeccion>La historia</TituloSeccion>
      <div style={{
        background: 'linear-gradient(135deg, var(--crema-claro), white)',
        border: '2px solid var(--mostaza)', borderRadius: 16, padding: '40px 46px',
      }}>
        <p style={{ fontSize: 18, lineHeight: 2, color: '#3e2a1a', marginBottom: 18 }}>
          El Rincón Nobsano nació en el corazón de Nobsa con un propósito claro: llevar a la mesa la cocina
          boyacense de siempre, esa que huele a leña, a maíz y a hogar. Lo que comenzó como un pequeño
          restaurante familiar frente a la plaza se convirtió en un referente de la gastronomía regional.
        </p>
        <p style={{ fontSize: 18, lineHeight: 2, color: '#3e2a1a', marginBottom: 18 }}>
          Con los años nació Café La Ruana — un homenaje a la prenda que identifica a Nobsa ante el mundo —
          y con él, la expansión a Monguí y al Paradero Paipa. Cada sede conserva la misma promesa: café de origen
          boyacense, recetas tradicionales y la calidez de atender como se atiende en casa.
        </p>
        <p style={{
          fontFamily: 'Cinzel, serif', fontSize: 22, fontStyle: 'italic', fontWeight: 600,
          color: 'var(--choco)', textAlign: 'center', marginTop: 30,
        }}>
          "De Nobsa para Boyacá, y de Boyacá para el mundo."
        </p>
        <p style={{ fontSize: 13, color: '#9a8560', textAlign: 'center', marginTop: 24, fontStyle: 'italic' }}>
          ✎ Texto borrador — se reemplazará con la historia real contada por los fundadores.
        </p>
      </div>
    </Cuaderno>
      <BotonesFlotantes whatsapp="+57 3215426830" />
    </>
  )
}
