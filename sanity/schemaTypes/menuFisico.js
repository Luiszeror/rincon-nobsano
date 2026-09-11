export default {
  name: 'menuFisico',
  title: 'Fotos del Menú Físico',
  type: 'document',
  fields: [
    { name: 'local', title: 'Local', type: 'string',
      options: { list: ['rincon-nobsano', 'cafe-nobsa', 'cafe-mongui', 'cafe-paipa'] } },
    {
      name: 'seccionPrincipal',
      title: 'Sección (solo El Rincón Nobsano)',
      type: 'string',
      description: 'Solo aplica a El Rincón Nobsano. Dejar vacío en los cafés.',
      options: {
        list: [
          { title: 'Platos a la Carta', value: 'Platos a la Carta' },
          { title: 'Café del Restaurante', value: 'Café del Restaurante' },
        ],
      },
    },
    {
      name: 'fotos',
      title: 'Fotos del menú',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    },
  ],
  preview: {
    select: { title: 'local', subtitle: 'seccionPrincipal' },
  },
}