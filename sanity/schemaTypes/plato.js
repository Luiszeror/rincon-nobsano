export default {
  name: 'plato',
  title: 'Plato del Menú',
  type: 'document',
  fields: [
    { name: 'local', title: 'Local', type: 'string',
      options: { list: ['rincon-nobsano', 'cafe-nobsa', 'cafe-mongui', 'cafe-paipa'] } },
    { name: 'seccionPrincipal', title: 'Sección principal (solo El Rincón Nobsano)', type: 'string',
      description: 'Ej: "Platos a la Carta" o "Café del Restaurante". Dejar vacío en los cafés.' },
    { name: 'categoria', title: 'Categoría / Subsección', type: 'string' },
    { name: 'nombre', title: 'Nombre del plato', type: 'string' },
    { name: 'descripcion', title: 'Descripción', type: 'text', rows: 2 },
    { name: 'imagen', title: 'Foto del plato', type: 'image', options: { hotspot: true } },
    { name: 'orden', title: 'Orden dentro de la categoría', type: 'number' },
  ],
  preview: { select: { title: 'nombre', subtitle: 'categoria', media: 'imagen' } },
}