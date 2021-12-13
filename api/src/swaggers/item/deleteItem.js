module.exports = {
  delete: {
    tags: ['Items CRUD operations'],
    summary: 'Deletes an item',
    description: '',
    operationId: 'deleteItem',
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
        description: 'ID of item to delete',
      },
    ],

    responses: {
      201: {
        description: 'successful operation',
      },
    },
  },
};

// find pet
