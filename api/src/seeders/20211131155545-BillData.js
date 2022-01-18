const faker = require('faker');
const { billValue } = require('../constans/constants');

const billValues = [
    {
        id: 1,
        incomeTax: billValue.INCOME_TAX,
        militaryTax: billValue.MILITARY_TAX,
        createdAt: faker.date.recent(),
        updatedAt: faker.date.recent(),
    },
];

module.exports = {
    up: async (queryInterface) => {
        await queryInterface.bulkInsert('bills', billValues, {});
    },

    down: async (queryInterface) => {
        await queryInterface.bulkDelete('bills', null, {});
    },
};
