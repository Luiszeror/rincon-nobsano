export default {
  name: 'plato',
  title: 'Plato del Menú',
  type: 'document',
  fields: [
    { name: 'local', title: 'Local', type: 'string',
      options: { list: ['rincon-nobsano', 'cafe-nobsa', 'cafe-mongui', 'cafe-paipa'] } },
    {
      name: 'seccionPrincipal',
      title: 'Sección principal (solo El Rincón Nobsano)',
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
      name: 'categoria',
      title: 'Categoría / Subsección',
      type: 'string',
      options: {
        list: [
          'Entradas', 'Platos Típicos', 'Pastas', 'Carnes', 'Cerdo', 'Pollo',
          'Pescados', 'Cazuelas', 'Menu Infantil', 'Bebidas',
          'Bebidas Calientes de Café', 'Capuccinos', 'Bebidas Calientes de Nuestra Tierra',
          'Bebidas Calientes', 'Bebidas Frías con Café', 'Malteadas', 'Sodas',
          'Desayunos', 'Amasijos', 'Sándwich', 'Milhojas & Postres',
          'Crepes Dulces', 'Crepes de Sal', 'Ensaladas de Frutas', 'Copas de Helado',
          'Heladería', 'Wafles', 'Comidas Rapidas', 'Bebidas Frías',
        ],
      },
    },
    { name: 'nombre', title: 'Nombre del plato', type: 'string' },
    { name: 'descripcion', title: 'Descripción', type: 'text', rows: 2 },
    { name: 'imagen', title: 'Foto del plato', type: 'image', options: { hotspot: true } },
    { name: 'orden', title: 'Orden dentro de la categoría', type: 'number' },
  ],
  preview: { select: { title: 'nombre', subtitle: 'categoria', media: 'imagen' } },
}