import express from 'express';
import cors from 'cors';
import path from 'path';
import passport from 'passport';
import swaggerUi from 'swagger-ui-express';
import docs from './src/swaggers';
import router from './src/routes';
import sequelize from './db';

const app = express();

app.use(cors());
app.use(express.json());

app.use(passport.initialize());
app.use('/api', router);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(docs));
app.use('/docs', express.static(path.join(__dirname, 'docs')));

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ force: false });
  } catch (e) {
    throw new Error(e);
  }
};

start();

export default app;
