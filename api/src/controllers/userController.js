import statusCode from 'http-status';
import userService from '../services/userService';

const userList = async (req, res) => {
  const result = await userService.getUsers();
    return res.status(result.status)
    .json(result);
}

const registerUser = async (req, res) => {
  const {
    firstName, lastName, email, password,
  } = req.body;
  const result = await userService.registerUser(firstName, lastName, email, password);
    return res.status(result.status)
    .json(result);
}

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const result = await userService.loginUser(email, password);
    return res.status(result.status)
    .json(result);
}

const auth = (req, res) => {
  res.status(statusCode.OK).json({
    success: true, message: 'Success! You are authorized!.',
  });
};

export {
  userList,
  registerUser,
  loginUser,
  auth,
};
