import { User } from '../models/modelsAssociations';
import { statusesId } from '../constans/constants';

const getUsers = async () => {
  try {
    const getAllUsers = await User.findAll({
      order: [['id', 'ASC']],
    });
      return getAllUsers;
  } catch (err) {
      throw Error(err);
  }
}

const registerUser = async (firstName, lastName, email, password) => {
  try {
    const newUser = await User.create({
      firstName,
      lastName,
      email,
      password,
      roleId: 1,
      statusId: statusesId.NEW,
    });
      return newUser;
  } catch (err) {
      throw Error(err);
  }
}

const loginUser = async (email) => {
  try {
    const user = await User.findOne({ where: { email } });
      return user;
  } catch (err) {
      throw Error(err);
  }
}

export default {
  getUsers,
  registerUser,
  loginUser,
}
