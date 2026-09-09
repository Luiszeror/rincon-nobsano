export const structure = (S) => {
  const sedesCafe = [
    { id: 'cafe-nobsa', label: 'Café La Ruana — Nobsa' },
    { id: 'cafe-mongui', label: 'Café La Ruana — Monguí' },
    { id: 'cafe-paipa', label: 'Estación Café La Ruana — Paipa' },
  ]

  const listaPorSede = (tipo, tituloTipo, sedeId) =>
    S.documentTypeList(tipo)
      .title(tituloTipo)
      .filter('_type == $tipo && local == $local')
      .params({ tipo, local: sedeId })

  const listaPorSeccion = (tipo, tituloTipo, sedeId, seccion) =>
    S.documentTypeList(tipo)
      .title(tituloTipo)
      .filter('_type == $tipo && local == $local && seccionPrincipal == $seccion')
      .params({ tipo, local: sedeId, seccion })

  const menuRestaurante = (sedeId) =>
    S.list()
      .title('Menú por sección')
      .items([
        S.listItem()
          .title('Platos a la Carta')
          .child(listaPorSeccion('plato', 'Platos a la Carta', sedeId, 'Platos a la Carta')),
        S.listItem()
          .title('Café y Frutería')
          .child(listaPorSeccion('plato', 'Café y Frutería', sedeId, 'Café del Restaurante')),
      ])

  const menuFisicoRestaurante = (sedeId) =>
    S.list()
      .title('Fotos del Menú Físico por sección')
      .items([
        S.listItem()
          .title('Platos a la Carta')
          .child(listaPorSeccion('menuFisico', 'Platos a la Carta', sedeId, 'Platos a la Carta')),
        S.listItem()
          .title('Café y Frutería')
          .child(listaPorSeccion('menuFisico', 'Café y Frutería', sedeId, 'Café del Restaurante')),
      ])

  return S.list()
    .title('Contenido')
    .items([
      S.listItem()
        .title('Sede / Local')
        .child(S.documentTypeList('local').title('Sede / Local')),

      S.divider(),

      S.listItem()
        .title('El Rincón Nobsano')
        .child(
          S.list()
            .title('El Rincón Nobsano')
            .items([
              S.listItem().title('Producto Estrella').child(listaPorSede('productoEstrella', 'Producto Estrella', 'rincon-nobsano')),
              S.listItem().title('Foto de Ambiente').child(listaPorSede('fotoAmbiente', 'Foto de Ambiente', 'rincon-nobsano')),
              S.listItem().title('Anuncio').child(listaPorSede('anuncio', 'Anuncio', 'rincon-nobsano')),
              S.listItem().title('Plato del Menú').child(menuRestaurante('rincon-nobsano')),
              S.listItem().title('Fotos del Menú Físico').child(menuFisicoRestaurante('rincon-nobsano')),
            ])
        ),

      ...sedesCafe.map((sede) =>
        S.listItem()
          .title(sede.label)
          .child(
            S.list()
              .title(sede.label)
              .items([
                S.listItem().title('Producto Estrella').child(listaPorSede('productoEstrella', 'Producto Estrella', sede.id)),
                S.listItem().title('Foto de Ambiente').child(listaPorSede('fotoAmbiente', 'Foto de Ambiente', sede.id)),
                S.listItem().title('Anuncio').child(listaPorSede('anuncio', 'Anuncio', sede.id)),
                S.listItem().title('Plato del Menú').child(listaPorSede('plato', 'Plato del Menú', sede.id)),
                S.listItem().title('Fotos del Menú Físico').child(listaPorSede('menuFisico', 'Fotos del Menú Físico', sede.id)),
              ])
          )
      ),
    ])
}