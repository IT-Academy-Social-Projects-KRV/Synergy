const statuses = [
  {
    id: 1,
    name: 'New',
    createdAt: new Date(),
    updatedAt: new Date(),
    statusCategoryId: 1,
  },
  {
    id: 2,
    name: 'Deleted',
    createdAt: new Date(),
    updatedAt: new Date(),
    statusCategoryId: 1,
  },
  {
    id: 3,
    name: 'Registered',
    createdAt: new Date(),
    updatedAt: new Date(),
    statusCategoryId: 2,
  },
  {
    id: 4,
    name: 'In progress',
    createdAt: new Date(),
    updatedAt: new Date(),
    statusCategoryId: 3,
  },
  {
    id: 5,
    name: 'Finished',
    createdAt: new Date(),
    updatedAt: new Date(),
    statusCategoryId: 3,
  },
  {
    id: 6,
    name: 'Archived',
    createdAt: new Date(),
    updatedAt: new Date(),
    statusCategoryId: 3,
  },
  {
    id: 7,
    name: 'Approved',
    createdAt: new Date(),
    updatedAt: new Date(),
    statusCategoryId: 4,
  },
  {
    id: 8,
    name: 'Rejected',
    createdAt: new Date(),
    updatedAt: new Date(),
    statusCategoryId: 4,
  },
];

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('statuses', statuses, {})
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('statuses', null, {})
  },
};
