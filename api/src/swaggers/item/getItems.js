export default {
  get: {
    tags: ['Items CRUD operations'],
    description: 'Get items',
    operationId: 'getItems',
    parameters: [],
    responses: {
      200: {
        description: 'Items were obtained',
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
