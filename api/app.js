const path = require('path');
require('dotenv').config({
  path: path.resolve(__dirname, 'config/config.env'),
});
const express = require('express');
const cors = require('cors');
const passport = require('passport');
const swaggerUi = require('swagger-ui-express');
const docs = require('./src/swaggers');
const router = require('./src/routes');
const sequelize = require('./db');

const app = express();

app.use(cors());
app.use(express.json());

app.use(passport.initialize());
app.use('/api', router);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(docs));

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ force: false });
  } catch (e) {
    throw new Error(e);
  }
};

start();

module.exports = app;
