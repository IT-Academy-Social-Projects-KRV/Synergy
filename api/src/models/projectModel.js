import { DataTypes } from 'sequelize';
import sequelize from '../../db';

const Project = sequelize.define('project', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: false },
  capital: { type: DataTypes.DOUBLE, allowNull: false },
  dateStart: { type: DataTypes.DATEONLY, allowNull: false },
  dateFinish: { type: DataTypes.DATEONLY, allowNull: false },
});

export default Project;
