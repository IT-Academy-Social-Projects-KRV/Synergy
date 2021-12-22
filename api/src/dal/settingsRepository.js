const { User } = require('../models/modelsAssociations');

const updateSettings = async (firstName, lastName, userId) => {
  try {
    const data = await User.update({
      firstName,
      lastName,
    }, { where: { userId } });
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
