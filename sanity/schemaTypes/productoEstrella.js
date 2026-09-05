export default {
  name: 'productoEstrella',
  title: 'Producto Estrella',
  type: 'document',
  fields: [
    { name: 'local', title: 'Local', type: 'string',
      options: { list: ['rincon-nobsano', 'cafe-nobsa', 'cafe-mongui', 'cafe-paipa'] } },
    { name: 'orden', title: 'Orden de aparición', type: 'number' },
    { name: 'nombre', title: 'Nombre del producto', type: 'string' },
    { name: 'descripcion', title: 'Descripción', type: 'text', rows: 3 },
    { name: 'imagen', title: 'Foto', type: 'image', options: { hotspot: true } },
  ],
  preview: { select: { title: 'nombre', subtitle: 'local', media: 'imagen' } },
}