import { DataTypes } from 'sequelize';
import sequelize from '../../db';

const Token = sequelize.define('token', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

export default Token;
