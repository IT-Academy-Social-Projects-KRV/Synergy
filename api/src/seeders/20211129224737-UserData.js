const faker = require('faker');

module.exports = {
    up: async (queryInterface) => {
        const data = [];
        for (let i = 0; i < 200; i++) {
            const role = i === 0 ? 2 : 1;
            data.push({
                firstName: faker.name.firstName(),
                lastName: faker.name.lastName(),
                email: faker.internet.email(),
                password: faker.internet.password(),
                createdAt: faker.date.recent(),
                updatedAt: faker.date.recent(),
                roleId: role,
                statusId: 3,
            })
        }
        await queryInterface.bulkInsert('users', data, {});
    },

    down: async (queryInterface) => {
        await queryInterface.bulkDelete('users', null, {});
    },
};
