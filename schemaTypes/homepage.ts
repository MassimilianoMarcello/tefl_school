// homepage.js

export default {
    name: 'homepage',
    title: 'Homepage',
    type: 'document',
    fields: [
      {
        name: 'mainTitle',
        title: 'Titolo principale',
        type: 'string',
      },
      {
        name: 'mainText',
        title: 'Testo principale',
        type: 'text',
      },
      {
        name: 'bannerImage',
        title: 'Immagine del banner',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'components',
        title: 'Componenti',
        type: 'array',
        of: [{ type: 'componentPrototype' }],
      },
    ],
  };
  
  