

export default {
    name: 'author',
    title: 'Autore',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Nome',
        type: 'string',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'name',
          maxLength: 96,
        },
      },
      {
        name: 'image',
        title: 'Immagine',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'bio',
        title: 'Biografia',
        type: 'array',
        of: [
          {
            type: 'block',
          },
        ],
      },
    ],
  };
  