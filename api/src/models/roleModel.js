const { DataTypes } = require('sequelize');
const sequelize = require('../../db');

const Role = sequelize.define('role', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
});

module.exports = {
  Role,
};
