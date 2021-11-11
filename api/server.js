const path = require('path');
require('dotenv').config({
  path: path.resolve(__dirname, 'config/config.env'),
});
const express = require('express');
const cors = require('cors');
const router = require('./src/routes');
const sequelize = require('./db');

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', router);

const start = async function () {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => {
      console.log(`Serve is started on port ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
};

start();
