const { statuses } = require('../constans/constants');

module.exports = {
  up: async (queryInterface) => {
    const data = [];
    for (let i = 1; i < statuses.length + 1; i++) {
      data.push({
        id: i,
        name: statuses[i - 1].STATUS,
        createdAt: new Date(),
        updatedAt: new Date(),
        statusCategoryId: statuses[i - 1].CATEGORY_ID,
      })
    }
    await queryInterface.bulkInsert('statuses', data, {})
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('statuses', null, {})
  },
};
