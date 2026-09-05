export default {
  name: 'menuFisico',
  title: 'Fotos del Menú Físico',
  type: 'document',
  fields: [
    { name: 'local', title: 'Local', type: 'string',
      options: { list: ['rincon-nobsano', 'cafe-nobsa', 'cafe-mongui', 'cafe-paipa'] } },
    { name: 'seccionPrincipal', title: 'Sección (solo El Rincón Nobsano)', type: 'string',
      description: 'Usa exactamente "Platos a la Carta" o "Café y Frutería". Dejar vacío en los cafés.' },
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