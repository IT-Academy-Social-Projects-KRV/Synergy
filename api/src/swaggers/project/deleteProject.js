export default {
  delete: {
    tags: ['Project CRUD operations'],
    summary: 'Deletes an project',
    description: '',
    operationId: 'deleteProject',
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
        description: 'ID of project to delete',
      },
    ],

    responses: {
      201: {
        description: 'successful operation',
      },
    },
  },
};
