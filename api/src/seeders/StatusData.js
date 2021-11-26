const { Status } = require('../models/models');

const statuses = [
  {
    name: 'New',
    statusCategoryId: 1,
  },
  {
    name: 'Deleted',
    statusCategoryId: 1,
  },
  {
    name: 'Registered',
    statusCategoryId: 2,
  },
  {
    name: 'In progress',
    statusCategoryId: 3,
  },
  {
    name: 'Finished',
    statusCategoryId: 3,
  },
  {
    name: 'Archived',
    statusCategoryId: 3,
  },
  {
    name: 'Approved',
    statusCategoryId: 4,
  },
  {
    name: 'Rejected',
    statusCategoryId: 4,
  },
];

async function addStatuses() {
  statuses.forEach((status) => {
    Status.create(status);
  });
}

module.exports = addStatuses;
