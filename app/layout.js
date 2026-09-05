import './globals.css'

export const metadata = {
  title: 'El Rincón Nobsano — Gastronomía Boyacense',
  description: 'El Rincón Nobsano y Café La Ruana — Nobsa, Monguí y Paradero Paipa, Boyacá',
  icons: {
    icon: '/RINCONLOGO.png',
    shortcut: '/RINCONLOGO.png',
    apple: '/RINCONLOGO.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
