const faker = require('faker');

module.exports = {
  up: async (queryInterface) => {
    const data = [];
    for (let i = 0; i < 400; i++) {
      const priceData = faker.commerce.price(1, 300, 2);
      data.push({
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        price: priceData,
        priceMargin: priceData * 1.2,
        createdAt: faker.date.recent(),
        updatedAt: faker.date.recent(),
        statusId: faker.random.arrayElement([1, 4, 7, 8]),
        projectId: faker.datatype.number({ min: 1, max: 50 }),
      })
    }
    await queryInterface.bulkInsert('items', data, {})
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('items', null, {})
  },
};
