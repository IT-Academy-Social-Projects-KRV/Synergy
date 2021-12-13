const path = require('path');
require('dotenv').config({
  path: path.resolve(__dirname, 'config/config.env'),
});

const app = require('./app');

const PORT = process.env.PORT || 5000;

module.exports = app.listen(PORT);
