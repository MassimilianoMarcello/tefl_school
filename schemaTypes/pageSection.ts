export default{
    name: 'pageSection',
    title: 'Page Section',
    type: 'object',
    fields: [
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
        name: 'video',
        title: 'Video URL',
        type: 'url'
      }
    ]
  }
  
  
  
  
  