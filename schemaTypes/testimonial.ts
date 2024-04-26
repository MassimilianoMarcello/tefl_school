export default {
    type: "document",
    name: "testimonial",
    title: "Testimonial",
    fields: [
      {
        type: "string",
        name: "title",
        title: "Review Title"
      },
      {
        type: "text",
        name: "review",
        title: "Review Text"
      },
      {
        type: "string",
        name: "name",
        title: "Testimonial Name"
      },
      {
        type: "string",
        name: "city",
        title: "City of Origin"
      },
      {
        type: "string",
        name: "state",
        title: "State of Origin"
      },
      {
        name: "image",
        type: "image",
        title: "Testimonial Photo"
      }
    ]
  };