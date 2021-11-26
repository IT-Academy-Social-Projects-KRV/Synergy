const { DataTypes } = require('sequelize');
const sequelize = require('../../db');

const Project = sequelize.define('project', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: false },
  capital: { type: DataTypes.INTEGER, allowNull: false },
  date_start: { type: DataTypes.DATEONLY, allowNull: false },
  date_finish: { type: DataTypes.DATEONLY, allowNull: false },
});

const User = sequelize.define('user', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  first_name: { type: DataTypes.STRING, allowNull: false },
  last_name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, unique: true, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false },
});

const Role = sequelize.define('role', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
});

const Item = sequelize.define('item', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: false },
  price: { type: DataTypes.DOUBLE, allowNull: false },
  price_margin: { type: DataTypes.DOUBLE, allowNull: false },
});

const Comment = sequelize.define('comment', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  content: { type: DataTypes.TEXT, allowNull: false },
});

const Status = sequelize.define('status', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.TEXT, unique: true, allowNull: false },
});

const StatusCategory = sequelize.define('status_category', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  category: { type: DataTypes.TEXT, unique: true, allowNull: false },
});

const Token = sequelize.define('token', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

User.hasMany(Project);
Project.belongsTo(User);

Role.hasMany(User);
User.belongsTo(Role);

Status.hasMany(User);
User.belongsTo(Status);

Token.hasOne(User);
User.belongsTo(Token);

Status.hasMany(Project);
Project.belongsTo(Status);

Status.hasMany(Item);
Item.belongsTo(Status);

StatusCategory.hasMany(Status);
Status.belongsTo(StatusCategory);

Project.hasMany(Item);
Item.belongsTo(Project);

Item.hasMany(Comment);
Comment.belongsTo(Item);

User.hasMany(Comment);
Comment.belongsTo(User);

module.exports = {
  Project, User, Role, Item, Comment, Status, StatusCategory, Token,
};
