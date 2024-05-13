export default {
    name: 'universalSchema',
    title: 'Universal Schema',
    type: 'document',
    fields: [
      {
        name: 'images',
        type: 'array',
        title: 'Images',
        of: [
          {
            name: 'image',
            type: 'image',
            title: 'Image',
            options: {
              hotspot: true,
            },
            fields: [
              {
                name: 'alt',
                type: 'string',
                title: 'Alternative text',
              },
            ],
          },
        ],
        options: {
          layout: 'grid',
        },
      },
      {
        name: 'titles',
        title: 'Titles',
        type: 'array',
        of: [{ type: 'string' }],
      },
      {
        name: 'texts',
        title: 'Texts',
        type: 'array',
        of: [{ type: 'string' }],
      },
    ],
  };
  