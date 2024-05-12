// staff.tsx

const staff = {
    name: 'teachers',
    title: 'Teachers Page',
    type: 'document',
    fields: [
      {
        name: 'idPhoto',
        title: 'Id Photo',
        type: 'image',
        options: {
          hotspot: true,
        },
        fields: [
          {
            name: "alt",
            title: "Alt",
            type: "string"
          }
        ]
      },

      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: "slug",
        title: "Slug",
        type: "slug",
        options: { source: "name" }
      },
      {
        name: 'role',
        title: 'Role',
        type: 'string',
      },
      {
        name: 'infoParagraph',
        title: 'Info Paragraph',
        type: 'text',
      },
      {
        name: "content",
        title: "Content",
        type: "array",
        of: [{ type: "block" }]
      }
    ],
  };
  
  export default staff;