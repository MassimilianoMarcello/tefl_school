import imagesGallery from './imagesGallery';
import author from './author';



export default {
  name: 'blogPost',
  title: 'Post del Blog',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titolo',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
        name: 'author',
        title: 'Autore',
        type: 'reference',
        to: [{ type: 'author' }],
      },
    {
      name: 'publishedAt',
      title: 'Data di Pubblicazione',
      type: 'datetime',
    },
    {
      name: 'mainImage',
      title: 'Immagine Principale',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'excerpt',
      title: 'Estratto',
      type: 'text',
    },
    {
      name: 'body',
      title: 'Contenuto',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
        {
          type: 'reference',
          to: [{ type: 'imagesGallery' }],
        },
      ],
    },
  ],
};
