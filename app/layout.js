import './globals.css'

export const metadata = {
  metadataBase: new URL('https://restauranterinconnobsano-cafelaruanaboyac.com'),
  title: {
    default: 'El Rincón Nobsano — Gastronomía Boyacense',
    template: '%s | El Rincón Nobsano',
  },
  description:
    'El Rincón Nobsano y Café La Ruana en Nobsa, Monguí y Paipa, Boyacá. Cocina boyacense, café de especialidad y milhojas artesanales.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
