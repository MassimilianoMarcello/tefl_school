export default {
    name: 'faq',
    type: 'document',
    title: 'Frequently Asked Question',
    fields: [
      {
        name: 'question',
        type: 'string',
        title: 'Question'
      },
      {
        name: 'answer',
        type: 'text',
        title: 'Answer',
      },
      {
        name: 'category',
        type: 'string',
        title: 'Category',
        options: {
          list: [
            { title: 'General Questions', value: 'general' },
            { title: 'Paperwork and Documentation', value: 'technical' },
            { title: 'Questions about Florence: Living in Italy', value: 'living costs' },
         
          ]
        }
      }
    ]
  }
  
  
  