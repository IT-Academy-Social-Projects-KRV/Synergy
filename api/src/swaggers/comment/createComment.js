export default {
  post: {
    tags: ['Comments CRUD operations'],
    summary: 'Add a new comment to the item',
    description: '',
    operationId: 'addComment',
    consumes: ['application/json'],
    produces: ['application/json'],
    parameters: [],
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/Comments',
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
              $ref: '#/components/schemas/Comments',
            },
          },
        },
      },
    },
  },
};
