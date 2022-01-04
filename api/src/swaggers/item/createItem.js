export default {
  post: {
    tags: ['Items CRUD operations'],
    summary: 'Add a new item to the project',
    description: '',
    operationId: 'addItem',
    consumes: ['application/json'],
    produces: ['application/json'],
    parameters: [],
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/Item',
          },
        },
      },
    },
    responses: {
      201: {
        description: 'successful operation',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/Project',
            },
          },
        },
      },
    },
  },
};
