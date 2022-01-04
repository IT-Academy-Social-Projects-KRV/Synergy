const { DataTypes } = require('sequelize');
const sequelize = require('../../db');

const Bill = sequelize.define('bill', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  incomeTax: { type: DataTypes.DECIMAL, allowNull: false },
  militaryTax: { type: DataTypes.DECIMAL, allowNull: false },
});

module.exports = {
  Bill,
};
