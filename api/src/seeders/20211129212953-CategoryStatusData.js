const { statusCategories } = require('../constans/constants');

const categories = [
    {
        id: 1,
        category: statusCategories.SHARED,
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: 2,
        category: statusCategories.USER,
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: 3,
        category: statusCategories.PROJECT,
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: 4,
        category: statusCategories.ITEM,
        createdAt: new Date(),
        updatedAt: new Date(),
    },
];

module.exports = {
    up: async (queryInterface) => {
        await queryInterface.bulkInsert('status_categories', categories, {});
    },

    down: async (queryInterface) => {
        await queryInterface.bulkDelete('status_categories', null, {});
    },
};
