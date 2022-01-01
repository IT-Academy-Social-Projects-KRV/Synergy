import 'regenerator-runtime/runtime';
import userRepository from '../../src/dal/userRepository';
import userService from '../../src/services/userService';

test('Login user', async () => {
    const loginUserSpy = jest.spyOn(userRepository, 'loginUser').mockImplementation();
    await userService.loginUser('foo@bar.com');
    expect(loginUserSpy).toHaveBeenCalledWith('foo@bar.com');
})
