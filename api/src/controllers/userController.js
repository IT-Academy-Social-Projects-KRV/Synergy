const jwt = require('jsonwebtoken');

const { User } = require('../models/models');

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email } });
  if (!user) {
      return res.status(401).json({
        message: 'Authentification failed. User not found',
      });
    }
  if (user.password === password) {
    const payload = { id: user.id };
    const token = jwt.sign(payload, process.env.SECRET_KEY);
    return res.json({
      message: 'Success!', user, token,
    });
  }
    return res.status(401).json({
      message: 'Password is incorrect',
    });
}

const auth = (req, res) => {
  res.status(200).json({
    success: true, message: 'Success! You are authorized!.',
  });
};

module.exports = {
  loginUser,
  auth,
};
