// commonPageTop.ts

export default {
    name: 'commonTopPage',
    title: 'Common Top Page',
    type: 'document',
    fields: [
      {
        name: 'backgroundImage',
        title: 'Background Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'subtitle',
        title: 'Subtitle',
        type: 'string',
      },
      {
        name: 'secondImage',
        title: 'Second Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'thirdImage',
        title: 'Third Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: "content",
        title: "Content",
        type: "array",
        of: [{ type: "block" }]
      }
    ],
  };