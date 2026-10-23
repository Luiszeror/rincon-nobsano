export default function sitemap() {
  const base = 'https://restauranterinconnobsano-cafelaruanaboyac.com'
  return ['', '/nobsa-cafe', '/mongui', '/paipa', '/quienes-somos'].map((ruta) => ({
    url: base + ruta,
    lastModified: new Date(),
  }))
}