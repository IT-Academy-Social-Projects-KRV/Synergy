const { DataTypes } = require('sequelize');
const sequelize = require('../../db');

const Comment = sequelize.define('comment', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  content: { type: DataTypes.TEXT, allowNull: false },
});

module.exports = {
  Comment,
};
