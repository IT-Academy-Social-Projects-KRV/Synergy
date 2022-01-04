export default {
  delete: {
    tags: ['Comments CRUD operations'],
    summary: 'Deletes an comment',
    description: '',
    operationId: 'deleteComment',
    consumes: ['application/json'],
    produces: ['application/json'],
    parameters: [
      {
        name: 'id',
        in: 'path',
        schema: {},
        type: 'integer',
        required: true,
        description: 'ID of comment to delete',
      },
    ],

    responses: {
      201: {
        description: 'successful operation',
      },
    },
  },
};
