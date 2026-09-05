export default {
  name: 'local',
  title: 'Sede / Local',
  type: 'document',
  fields: [
    { name: 'id', title: 'Identificador', type: 'string',
      options: { list: ['rincon-nobsano', 'cafe-nobsa', 'cafe-mongui', 'cafe-paipa'] } },
    { name: 'nombreVisible', title: 'Nombre visible', type: 'string' },
    {
      name: 'horarios',
      title: 'Horarios',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'dia', title: 'Día(s)', type: 'string' },
          { name: 'hora', title: 'Horario', type: 'string' },
        ],
      }],
    },
    {
      name: 'contacto',
      title: 'Contacto',
      type: 'object',
      fields: [
        { name: 'whatsapp', title: 'WhatsApp (+57...)', type: 'string' },
        { name: 'instagram', title: 'Instagram (@usuario)', type: 'string' },
        { name: 'correo', title: 'Correo', type: 'string' },
      ],
    },
  ],
  preview: { select: { title: 'nombreVisible' } },
}