const { DataTypes } = require('sequelize');
const sequelize = require('../../db');

const Item = sequelize.define('item', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: false },
  price: { type: DataTypes.DOUBLE, allowNull: false },
  priceMargin: { type: DataTypes.DOUBLE, allowNull: false },
});

module.exports = {
  Item,
};
