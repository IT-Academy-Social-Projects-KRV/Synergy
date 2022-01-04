export default {
  get: {
    tags: ['Project CRUD operations'],
    description: 'Get projects',
    operationId: 'getProjects',
    parameters: [],
    responses: {
      200: {
        description: 'Project were obtained',
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
