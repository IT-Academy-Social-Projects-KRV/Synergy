module.exports = {
  post: {
    tags: ['Items CRUD operations'],
    summary: 'Add a new item to the project',
    description: '',
    operationId: 'addItem',
    consumes: ['application/json'],
    produces: ['application/json'],
    parameters: [],
    requestBody: {
      content: {
        'application/json': {
          schema: {
            //   properties: {
            //     name: {
            //       type: 'string',
            //       example: 'string',
            //     },
            //     description: {
            //       type: 'string',
            //       example: 'string',
            //     },
            //     capital: {
            //       type: 'number',
            //       example: 1,
            //     },
            //     date_start: {
            //       type: 'string',
            //       example: '2021-12-11',
            //     },
            //     date_finish: {
            //       type: 'string',
            //       example: '2021-12-12',
            //     },

            //   },
            $ref: '#/components/schemas/Item',
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

// find pet