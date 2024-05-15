export default{
    name: 'pageSection',
    title: 'Page Section',
    type: 'object',
    fields: [
        {
            name: 'order',
            title: 'Order',
            type: 'number'
          },
      {
        name: 'title',
        title: 'Title',
        type: 'string'
      },
      {
        name: 'subtitle',
        title: 'Subtitle',
        type: 'string'
      },
      {
        name: 'text',
        title: 'Text',
        type: 'text'
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true, // Abilita l'hotspot per l'immagine
        }
        
      },
      {
        name: 'content',
        type: 'array',
        title: 'Content',
        of: [
          {
            type: 'block'
          }
        ]
      },



    //   add video

    //   {
    //     name: 'video',
    //     title: 'Video URL',
    //     type: 'url'
    //   },


    //   add  list


    //   {
    //     name: 'list',
    //     title: 'List',
    //     type: 'array',
    //     of: [{ type: 'string' }], 
    //   },


    //   add link


    //   {
    //     name: 'link',
    //     title: 'Link',
    //     type: 'url' 
    //   }
    ]
  }
  