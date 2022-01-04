export default {
  get: {
    tags: ['Comments CRUD operations'],
    description: 'Get comment',
    operationId: 'getComment',
    parameters: [],
    responses: {
      200: {
        description: 'Comment were obtained',
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
