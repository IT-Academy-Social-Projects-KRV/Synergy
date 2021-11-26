const { StatusCategory } = require('../models/models');

const categories = [
  {
    category: 'Shared',
  },
  {
    category: 'User',
  },
  {
    category: 'Project',
  },
  {
    category: 'Item',
  },
];

async function addStatusCategories() {
  categories.forEach((category) => {
    StatusCategory.create(category);
  });
}

module.exports = addStatusCategories;
