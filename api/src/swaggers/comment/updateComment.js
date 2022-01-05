export default {
  patch: {
    tags: ['Comments CRUD operations'],
    summary: 'Update an existing comment',
    description: '',
    operationId: 'updateComment',
    consumes: ['application/json'],
    produces: ['application/json'],
    parameters: [
      {
        name: 'id',
        in: 'path',
        schema: {
        },
        type: 'integer',
        required: true,
        description: 'ID of comment to return',
      },
      {
        in: 'body',
        name: 'body',
        description: 'Comment object that needs to be added to the item',
        required: true,
        schema: {
          $ref: '#/components/schemas/Comments',
        },
      },
    ],

    responses: {
      201: {
        description: 'successful operation',
      },
    },
  },
};
