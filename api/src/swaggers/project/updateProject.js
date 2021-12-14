module.exports = {
  patch: {
    tags: ['Project CRUD operations'],
    summary: 'Update an existing project',
    description: '',
    operationId: 'updateProject',
    consumes: ['application/json'],
    produces: ['application/json'],
    parameters: [
      {
        name: 'id',
        in: 'path',
        schema: {
          //   $ref: '#/components/schemas/Project',
        },
        type: 'integer',
        required: true,
        description: 'ID of project to return',
      },
      {
        in: 'body',
        name: 'body',
        description: 'Project object that needs to be added to the store',
        required: true,
        schema: {
          $ref: '#/components/schemas/Project',
        },
      },
    ],

    responses: {
      201: {
        description: 'successful operation',
        // content: {
        //   'application/json': {
        //     schema: {
        //       $ref: '#/components/schemas/Project',
        //     },
        //   },
        // },
      },
    },
  },
};

// find pet
