const categories = [
    {
        id: 1,
        category: 'Shared',
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: 2,
        category: 'User',
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: 3,
        category: 'Project',
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: 4,
        category: 'Item',
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
