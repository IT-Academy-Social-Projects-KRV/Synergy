module.exports = {
  patch: {
    tags: ['Items CRUD operations'],
    summary: 'Update an existing item',
    description: '',
    operationId: 'updateItem',
    consumes: ['application/json'],
    produces: ['application/json'],
    parameters: [
      {
        name: 'id',
        in: 'path',
        schema: {
          //   $ref: '#/components/schemas/Project',
        },
        type: 'integer',
        required: true,
        description: 'ID of item to return',
      },
      {
        in: 'body',
        name: 'body',
        description: 'Pet object that needs to be added to the store',
        required: true,
        schema: {
          $ref: '#/components/schemas/Item',
        },
      },
    ],

    responses: {
      201: {
        description: 'successful operation',
        // content: {
        //   'application/json': {
        //     schema: {
        //       $ref: '#/components/schemas/Project',
        //     },
        //   },
        // },
      },
    },
  },
};

// find pet
