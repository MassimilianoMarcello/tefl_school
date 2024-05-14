export default {
  name: 'imagesGallery',
  title: 'Galleria di Immagini',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titolo',
      type: 'string',
    },
    {
      name: 'images',
      title: 'Immagini',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              title: 'Testo Alternativo',
              type: 'string',
            },
            {
              name: 'caption',
              title: 'Didascalia',
              type: 'string',
            },
          ],
        },
      ],
    },
  ],
}
