// componentPrototype.js

export default {
    name: 'componentPrototype',
    title: 'Componente Prototipo',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Titolo',
        type: 'string',
      },
      {
        name: 'subtitle',
        title: 'Sottotitolo',
        type: 'string',
      },
      {
        name: 'text',
        title: 'Testo',
        type: 'text',
      },
      {
        name: 'image',
        title: 'Immagine',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
    ],
  };
  