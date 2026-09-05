export default {
  name: 'fotoAmbiente',
  title: 'Foto de Ambiente',
  type: 'document',
  fields: [
    { name: 'local', title: 'Local', type: 'string',
      options: { list: ['rincon-nobsano', 'cafe-nobsa', 'cafe-mongui', 'cafe-paipa'] } },
    { name: 'orden', title: 'Orden en el carrusel', type: 'number' },
    { name: 'titulo', title: 'Título corto', type: 'string' },
    { name: 'texto', title: 'Descripción', type: 'string' },
    { name: 'imagen', title: 'Foto', type: 'image', options: { hotspot: true } },
  ],
  preview: { select: { title: 'titulo', subtitle: 'local', media: 'imagen' } },
}