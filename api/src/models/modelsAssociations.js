const { Comment } = require('./commentModel');
const { Item } = require('./itemModel');
const { Project } = require('./projectModel');
const { Role } = require('./roleModel');
const { StatusCategory } = require('./statusCategoryModel');
const { Status } = require('./statusModel');
const { Token } = require('./tokenModel');
const { User } = require('./userModel');

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
