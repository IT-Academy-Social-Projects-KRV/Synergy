const jwt = require('jsonwebtoken');
const statusCode = require('http-status');
const userRepository = require('../dal/userRepository');

const loginUser = async (email, password) => {
    const user = await userRepository.loginUser(email);
    if (!user) {
      return {
        status: statusCode.UNAUTHORIZED,
        message: 'Authentification failed. User not found',
      };
      }
    if (user.password === password) {
      const payload = { id: user.id };
      const token = jwt.sign(payload, process.env.SECRET_KEY);
      return {
        status: statusCode.OK,
        message: 'Success!',
        user,
        token,
      };
    }
    return {
        status: statusCode.UNAUTHORIZED,
        message: 'Password is incorrect',
      };
}

module.exports = {
    loginUser,
}
