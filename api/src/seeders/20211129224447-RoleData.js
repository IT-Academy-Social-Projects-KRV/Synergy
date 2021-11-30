const roles = [
    {
        id: 1,
        name: 'USER',
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: 2,
        name: 'ADMIN',
        createdAt: new Date(),
        updatedAt: new Date(),
    },
]
module.exports = {
    up: async (queryInterface) => {
        await queryInterface.bulkInsert('roles', roles, {})
    },

    down: async (queryInterface) => {
        await queryInterface.bulkDelete('roles', null, {})
    },
};
