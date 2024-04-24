export default {
    name: 'course',
    title: 'Course',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Course Name',
        type: 'string',
      },
      {
        name: 'photo',
        title: 'Photo',
        type: 'image',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'name',
          maxLength: 200,
        },
      },
      {
        name: 'hours',
        title: 'Number of Hours',
        type: 'number',
      },
      {
        name: 'level',
        title: 'Level',
        type: 'string',
        options: {
          list: ['Beginner', 'Intermediate', 'Advanced'],
        },
      },
      {
        name: 'price',
        title: 'Price',
        type: 'number',
      },
      {
        name: 'discount',
        title: 'Discount Offered',
        type: 'number',
      },
      {
        name: 'description',
        title: 'Course Description',
        type: 'text',
      },

      {
        name: 'completionTimeWeeks',
        title: 'Completion Time (weeks)',
        type: 'number',
      },
      {
        name: 'startDate',
        title: 'Start Date',
        type: 'date',
      },
      {
        name: 'endDate',
        title: 'End Date',
        type: 'date',
      },
    ],
  };
  