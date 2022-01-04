export default {
  get: {
    tags: ['Comments CRUD operations'],
    description: 'Get comments',
    operationId: 'getComments',
    parameters: [
      {
        in: 'body',
        name: 'id',
        type: 'integer',
        required: true,
        schema: {
          properties: {
            itemId: {
              type: 'integer',
              example: 1,
            },
          },
        },
      },
    ],
    responses: {
      200: {
        description: 'Comments were obtained',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/Comments',
            },
          },
        },
      },
    },
  },
};
