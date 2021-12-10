const { User } = require('../models/models');

const loginUser = async (email) => {
  const user = await User.findOne({ where: { email } });
    return user;
}

module.exports = {
    loginUser,
}
