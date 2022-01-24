import jwt from 'jsonwebtoken';
//import bcrypt from 'bcrypt';
import statusCode from 'http-status';
import userRepository from '../dal/userRepository';
import { User } from '../models/modelsAssociations';

const getUsers = async () => {
  const getAllUsers = await userRepository.getUsers();
  return {
    status: statusCode.OK,
    getAllUsers,
  }
}

const registerUser = async (firstName, lastName, email, password) => {
  const emailExist = await User.findOne({
    where: { email },
  });
  if (emailExist) {
    return {
      status: statusCode.FORBIDDEN,
      message: 'Email already exist',
    }
  }
  const newUser = await userRepository.registerUser(firstName, lastName, email, password);
  const payload = {
    id: newUser.id,
    email: newUser.email,
  };
  const token = jwt.sign(
    payload,
    process.env.SECRET_KEY,
    { expiresIn: '24h' },
  );
  return {
    status: statusCode.CREATED,
    message: 'User has been created',
    token,
  }
}

const loginUser = async (email, password) => {
  const user = await userRepository.loginUser(email);
  if (!user) {
    return {
      status: statusCode.UNAUTHORIZED,
      message: 'Authentification failed. User not found',
    };
  }
  if (user.password === password) {
    const payload = {
      id: user.id,
      email: user.email,
    };
    const token = jwt.sign(
      payload,
      process.env.SECRET_KEY,
      { expiresIn: '24h' },
    );
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

// const loginUser = async (email, password) => {
//     const user = await userRepository.loginUser(email);
//     if (!user) {
//       return {
//         status: statusCode.UNAUTHORIZED,
//         message: 'Authentification failed. User not found',
//       };
//     }
//     const comparePassword = bcrypt.compareSync(password, user.password);
//     if (!comparePassword) {
//       return {
//         status: statusCode.UNAUTHORIZED,
//         message: 'Password is incorrect',
//       };
//     }
//     const payload = {
//       id: user.id,
//       email: user.email,
//     };
//     const token = jwt.sign(payload, process.env.SECRET_KEY);
//       return {
//         status: statusCode.OK,
//         message: 'Success!',
//         user,
//         token,
//     };
// }

export default {
  getUsers,
  registerUser,
  loginUser,
}
