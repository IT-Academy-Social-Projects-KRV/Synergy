const { User } = require('../models/modelsAssociations');

const updateSettings = async (firstName, lastName, email, userId) => {
  try {
    const data = await User.update({
      firstName,
      lastName,
      email,
    }, { where: { userId } });
    return data;
  } catch (err) {
    throw Error(err);
  }
};

module.exports = {
  updateSettings,
};
