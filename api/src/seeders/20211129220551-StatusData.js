const { statuses } = require('../constans/constants');

module.exports = {
  up: async (queryInterface) => {
    const data = [];
    for (let i = 0; i < statuses.length; i++) {
      data.push({
        name: statuses[i].STATUS,
        createdAt: new Date(),
        updatedAt: new Date(),
        statusCategoryId: statuses[i].CATEGORY_ID,
      })
    }
    await queryInterface.bulkInsert('statuses', data, {})
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('statuses', null, {})
  },
};
