export default {
  type: "document",
  name: "slideItem",
  title: "Slide Item",
  fields: [
    { type: "string", name: "title", title: "Title" },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 200,
      },
    },
    { type: "string", name: "alt", title: "Alt" },
    { type: "string", name: "subtitle", title: "Subtitle" },
    { type: "string", name: "text", title: "Text" },
    { type: "string", name: "linkText", title: "Link Text" },
    { name: "image", type: "image", title: "Image" },
    { name: "imageIcon", type: "image", title: "Icon Image" },
  ],
  
};
