import { DataTypes } from 'sequelize';
import sequelize from '../../db';

const Status = sequelize.define('status', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.TEXT, unique: true, allowNull: false },
});

export default Status;
