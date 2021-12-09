const { userRoles } = require('../constans/constants');

const roles = [
    {
        id: 1,
        name: userRoles.USER,
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: 2,
        name: userRoles.ADMIN,
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
