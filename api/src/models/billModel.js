const { DataTypes } = require('sequelize');
const sequelize = require('../../db');

const Bill = sequelize.define('bill', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  tax: { type: DataTypes.DECIMAL, allowNull: false },
});

module.exports = {
  Bill,
};
