'use client'
import Cuaderno from '../../components/Cuaderno'
import BotonesFlotantes from '../../components/BotonesFlotantes'
import LogoMarca from '../../components/LogoMarca'
export default function PaginaProximamente() {
  return (
    <>
    <Cuaderno activo="proximamente">
      <div style={{
        minHeight: '70vh',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        textAlign: 'center', gap: 26, padding: '40px 20px',
      }}>
        <div style={{
          width: 220, height: 220, borderRadius: '50%',
          background: 'linear-gradient(135deg, var(--crema), var(--mostaza-suave))',
          border: '5px solid var(--mostaza)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexDirection: 'column', gap: 8,
          boxShadow: '0 10px 28px rgba(78,42,21,0.22)',
        }}>
          <span style={{ fontSize: 64 }}>👥</span>
          <span style={{ fontFamily: 'Cinzel, serif', fontSize: 11, color: 'var(--choco)', letterSpacing: '0.08em', textTransform: 'uppercase', textAlign: 'center', padding: '0 20px' }}>
            Foto del equipo
          </span>
        </div>

        <h1 style={{ fontSize: 'clamp(30px, 5vw, 46px)', color: 'var(--choco)', fontWeight: 800 }}>
          Esta hoja aún está en blanco...
        </h1>
        <p style={{ fontSize: 18, color: '#5a4030', maxWidth: 500, lineHeight: 1.85 }}>
          Muy pronto escribiremos aquí la historia de una nueva sede.
          El Rincón Nobsano y Café La Ruana siguen creciendo por Boyacá.
        </p>
        <div style={{
          background: 'var(--crema)', border: '2px dashed var(--mostaza)',
          borderRadius: 16, padding: '22px 36px', marginTop: 8,
        }}>
          <p style={{ fontFamily: 'Cinzel, serif', fontSize: 18, color: 'var(--choco)', fontWeight: 600, fontStyle: 'italic' }}>
            ¿Tienes una sugerencia de dónde deberíamos abrir?
          </p>
          <a href="https://wa.me/573000000000" target="_blank" rel="noopener noreferrer" style={{
            display: 'inline-block', marginTop: 16,
            background: 'var(--choco)', color: 'var(--crema)',
            padding: '11px 30px', borderRadius: 30,
            textDecoration: 'none', fontWeight: 700, fontSize: 15,
            fontFamily: 'Cinzel, serif', letterSpacing: '0.04em',
          }}>Cuéntanos por WhatsApp</a>
        </div>
      </div>
    </Cuaderno>
      <BotonesFlotantes whatsapp="+57 3215426830" />
    </>
  )
}
