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
    {
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [{ type: 'pageSection' }], // Utilizza lo schema delle sezioni polimorfiche
    },

  ],
}
