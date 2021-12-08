const faker = require('faker');

module.exports = {
  up: async (queryInterface) => {
    const data = [];
    for (let i = 0; i < 50; i++) {
      data.push({
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        capital: faker.commerce.price(300, 20000, 2),
        dateStart: faker.date.past(),
        dateFinish: faker.date.future(),
        createdAt: faker.date.recent(),
        updatedAt: faker.date.recent(),
        userId: faker.datatype.number({ min: 2, max: 200 }),
        statusId: faker.random.arrayElement([1, 4, 5, 6]),
      })
    }
    await queryInterface.bulkInsert('projects', data, {})
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('projects', null, {})
  },
};
