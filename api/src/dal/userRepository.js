const { User } = require('../models/models');

const loginUser = async (email) => {
  try {
    const user = await User.findOne({ where: { email } });
      return user;
  } catch (err) {
      throw Error(err);
  }
}

module.exports = {
    loginUser,
}
