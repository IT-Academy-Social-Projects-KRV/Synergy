import { DataTypes } from 'sequelize';
import sequelize from '../../db';

const Bill = sequelize.define('bill', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  incomeTax: { type: DataTypes.DOUBLE, allowNull: false },
  militaryTax: { type: DataTypes.DOUBLE, allowNull: false },
});

export default Bill;
