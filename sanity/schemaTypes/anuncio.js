export default {
  name: 'anuncio',
  title: 'Anuncio',
  type: 'document',
  fields: [
    { name: 'local', title: 'Local', type: 'string',
      options: { list: ['rincon-nobsano', 'cafe-nobsa', 'cafe-mongui', 'cafe-paipa'] } },
    { name: 'tipo', title: 'Tipo de contenido', type: 'string',
      options: { list: [{ title: 'Foto', value: 'foto' }, { title: 'Video', value: 'video' }] } },
    { name: 'titulo', title: 'Título del anuncio', type: 'string' },
    { name: 'texto', title: 'Descripción', type: 'text', rows: 4 },
    { name: 'fecha', title: 'Fecha (texto libre, ej: Julio 2026)', type: 'string' },
    { name: 'imagen', title: 'Foto (si el tipo es Foto)', type: 'image', options: { hotspot: true } },
    { name: 'video', title: 'Video (si el tipo es Video)', type: 'file', options: { accept: 'video/*' } },
  ],
  preview: { select: { title: 'titulo', subtitle: 'local', media: 'imagen' } },
}