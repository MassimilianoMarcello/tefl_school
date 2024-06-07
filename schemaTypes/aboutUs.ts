export default // Definizione dello schema per una pagina che utilizza sezioni polimorfiche
{
  name: 'aboutUs',
  title: 'About Us',
  type: 'document',
  fields: [

    {
      name: 'mainTitle',
      title: 'Main Title',
      type: 'string',
    },

    {
      name: 'pageType',
      type: 'slug', 
      title: 'Page Type',
      options: {
        source: 'mainTitle',
        slugify: (input: string) => {
          // Rimuovi spazi e caratteri speciali e converti in camelCase
          return input.toLowerCase().replace(/[^a-zA-Z0-9]+/g, ' ').split(' ').map((word: string, index: number) => index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)).join('');
        }
      }
    },
    {
        name: 'mainImage',
        title: 'Main Image',
        type: 'image',
        options: {
          hotspot: true, 
        }
        
      },
    {
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [{ type: 'pageSection' }], 
    },

  ],
}
