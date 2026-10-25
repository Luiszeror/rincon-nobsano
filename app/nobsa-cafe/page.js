import Cuaderno from '../../components/Cuaderno'
import CafeNobsa from '../../components/CafeNobsa'
import BotonesFlotantes from '../../components/BotonesFlotantes'
import { getContenidoLocal } from '../../lib/sanity/queries'

export const metadata = {
  title: 'Café en Nobsa | Café La Ruana',
  description: 'Café La Ruana en Nobsa, Boyacá: café de especialidad, milhojas artesanales, migao boyacense y más. Menú, horarios y ubicación.',
  alternates: { canonical: '/nobsa-cafe' },
}

export default async function PaginaNobsaCafe() {
  const cafeNobsa = await getContenidoLocal('cafe-nobsa')

  return (
    <>
      <Cuaderno activo="nobsa-cafe">
        <CafeNobsa contenido={cafeNobsa} />
      </Cuaderno>
      <BotonesFlotantes whatsapp="+57 3215426830" />
    </>
  )
}