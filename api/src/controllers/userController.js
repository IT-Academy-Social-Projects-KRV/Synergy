const statusCode = require('http-status');
const userService = require('../services/userService');

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const result = await userService.loginUser(email, password);
    return res.status(result.status).json(result);
}

const auth = (req, res) => {
  res.status(statusCode.OK).json({
    success: true, message: 'Success! You are authorized!.',
  });
};

module.exports = {
  loginUser,
  auth,
};
