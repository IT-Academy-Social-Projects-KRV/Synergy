export default {
  get: {
    tags: ['Items CRUD operations'],
    summary: 'Find item by ID',
    description: 'Return a single item',
    operationId: 'getItem',
    parameters: [
      {
        name: 'id',
        in: 'path',
        schema: {
        },
        type: 'integer',
        required: true,
        description: 'ID of item to return',
      },
    ],
    responses: {
      200: {
        description: 'successful operation',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/Item',
            },
          },
        },
      },
    },
  },
};
