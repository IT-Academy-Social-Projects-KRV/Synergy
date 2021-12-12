const { DataTypes } = require('sequelize');
const sequelize = require('../../db');

const StatusCategory = sequelize.define('status_category', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  category: { type: DataTypes.TEXT, unique: true, allowNull: false },
});

module.exports = {
  StatusCategory,
};
