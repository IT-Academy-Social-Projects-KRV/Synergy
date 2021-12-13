const { DataTypes } = require('sequelize');
const sequelize = require('../../db');

const Status = sequelize.define('status', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.TEXT, unique: true, allowNull: false },
});

module.exports = {
  Status,
};
