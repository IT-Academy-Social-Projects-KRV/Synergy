const { User } = require('../models/modelsAssociations');

const updateSettings = async (firstName, lastName, id) => {
  try {
    const data = await User.update({
      firstName,
      lastName,
    }, { where: { id }, returning: true });
    return data;
  } catch (err) {
    throw Error(err);
  }
};

const updatePassword = async (password, userId) => {
  try {
    const data = await User.update({
      password,
    }, { where: { userId } });
    return data;
  } catch (err) {
    throw Error(err);
  }
}

module.exports = {
  updateSettings,
  updatePassword,
};
