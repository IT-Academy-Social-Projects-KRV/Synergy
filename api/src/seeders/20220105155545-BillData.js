import { billValue } from '../constans/constants';

const billValues = [
    {
        id: 1,
        incomeTax: billValue.INCOME_TAX,
        militaryTax: billValue.MILITARY_TAX,
    },
];

module.exports = {
    up: async (queryInterface) => {
        await queryInterface.bulkInsert('bill', billValues, {});
    },

    down: async (queryInterface) => {
        await queryInterface.bulkDelete('bill', null, {});
    },
};
