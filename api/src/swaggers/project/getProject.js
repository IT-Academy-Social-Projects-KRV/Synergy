export default {
  get: {
    tags: ['Project CRUD operations'],
    summary: 'Find project by ID',
    description: 'Return a single project',
    operationId: 'getProject',
    parameters: [
      {
        name: 'id',
        in: 'path',
        schema: {
        },
        type: 'integer',
        required: true,
        description: 'ID of project to return',
      },
    ],
    responses: {
      200: {
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
