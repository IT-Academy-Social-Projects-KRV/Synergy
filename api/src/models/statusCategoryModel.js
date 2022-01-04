import { DataTypes } from 'sequelize';
import sequelize from '../../db';

const StatusCategory = sequelize.define('status_category', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  category: { type: DataTypes.TEXT, unique: true, allowNull: false },
});

export default StatusCategory;
