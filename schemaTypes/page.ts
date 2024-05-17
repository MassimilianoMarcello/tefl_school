export default // Definizione dello schema per una pagina che utilizza sezioni polimorfiche
{
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    {
      name: 'mainTitle',
      title: 'Main Title',
      type: 'string',
    },
    // {
    //   name: 'pageType',
    //   type: 'slug',
    //   title: 'Page Type',
    //   options: {
    //     source: 'mainTitle',
    //     maxLength: 96
    //   }
    // },
    {
      name: 'pageType',
      type: 'slug', // Cambia il tipo da "string" a "slug"
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
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [{ type: 'pageSection' }], // Utilizza lo schema delle sezioni polimorfiche
    },

  ],
}
