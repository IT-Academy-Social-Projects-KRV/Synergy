export default {
  post: {
    tags: ['Project CRUD operations'],
    summary: 'Add a new project to the store',
    description: '',
    operationId: 'addProject',
    consumes: ['application/json'],
    produces: ['application/json'],
    parameters: [],
    requestBody: {
      content: {
        'application/json': {
          schema: {
            properties: {
              name: {
                type: 'string',
                example: 'string',
              },
              description: {
                type: 'string',
                example: 'string',
              },
              capital: {
                type: 'number',
                example: 1,
              },
              dateStart: {
                type: 'string',
                example: '2021-12-11',
              },
              dateFinish: {
                type: 'string',
                example: '2021-12-12',
              },
            },
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
