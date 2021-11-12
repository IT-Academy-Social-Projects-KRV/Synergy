const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const Project = sequelize.define("project", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false }
})

module.exports = { Project }