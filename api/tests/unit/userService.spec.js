const userRepository = require('../../src/dal/userRepository');
const {
    loginUser,
} = require('../../src/services/userService');

test('Login user', async () => {
    const loginUserSpy = jest.spyOn(userRepository, 'loginUser').mockImplementation();
    await loginUser('foo@bar.com');
    expect(loginUserSpy).toHaveBeenCalledWith('foo@bar.com');
})
