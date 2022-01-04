export default {
  components: {
    schemas: {
      User: {
        type: 'object', // data type
        properties: {
          id: {
            type: 'integer',
            description: 'The auto generated id of the user',
          },
          firstName: {
            type: 'string',
            description: 'User first name',
          },
          lastName: {
            type: 'string',
            description: 'User last name',
          },
          email: {
            type: 'string',
            description: 'User email',
          },
          password: {
            type: 'string',
            description: 'User password',
          },
        },
      },
      Project: {
        type: 'object', // data type
        required: ['name', 'description', 'capital', 'dateStart', 'dateFinish'],
        properties: {
          id: {
            type: 'integer',
            description: 'The auto generated id of the project',
            example: 1,
          },
          name: {
            type: 'string',
            description: 'The name of project',
            example: 'string',
          },
          description: {
            type: 'string',
            description: 'The description of project',
            example: 'string',
          },
          capital: {
            type: 'number',
            description: 'The capital of project',
            example: 1,
          },
          dateStart: {
            type: 'string',
            description: 'The start of project',
            format: 'date',
            example: '2021-12-11',
          },
          dateFinish: {
            type: 'string',
            description: 'The finish of project',
            format: 'date',
            example: '2021-12-12',
          },
          statusId: {
            type: 'integer',
            example: 1,
          },
        },
      },
      Item: {
        type: 'object', // data type
        required: [
          'name',
          'description',
          'price',
          'priceMargin',
          'statusId',
          'projectId',
        ],
        properties: {
          id: {
            type: 'integer',
            description: 'The auto generated id of the item',
            example: 1,
          },
          name: {
            type: 'string',
            description: 'The name of item',
            example: 'string',
          },
          description: {
            type: 'string',
            description: 'The description of item',
            example: 'string',
          },
          price: {
            type: 'number',
            description: 'The price of item',
            example: 1000,
          },
          priceMargin: {
            type: 'number',
            description: 'The price of item for customer',
            example: 1500,
          },
          statusId: {
            type: 'integer',
            description: 'The item status',
            example: 1,
          },
          projectId: {
            type: 'integer',
            description: 'The project id to which this item belong',
            example: 1,
          },
        },
      },
      Comments: {
        type: 'object', // data type
        required: [],
        properties: {
          id: {
            type: 'integer',
            description: 'The auto generated id of the comment',
            example: 1,
          },
          content: {
            type: 'string',
            description: 'Comment text',
            example: 'This item is good',
          },
          itemId: {
            type: 'integer',
            description: 'id of relative item',
            example: 1,
          },
          userId: {
            type: 'integer',
            description: 'id of relative user',
            example: 1,
          },
        },
      },
      Status: {
        type: 'object', // data type
        required: [],
        properties: {
          id: {
            type: 'integer',
            example: 1,
          },
          name: {
            type: 'string',
            example: 'string',
          },
          statusCategoryId: {
            type: 'integer',
            example: 1,
          },
        },
      },
      StatusCategory: {
        type: 'object', // data type
        required: [],
        properties: {
          id: {
            type: 'integer',
            example: 1,
          },

          category: {
            type: 'string',
            example: 'string',
          },
        },
      },
    },
  },
};
