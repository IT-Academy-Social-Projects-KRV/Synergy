import Comment from './commentModel';
import Item from './itemModel';
import Project from './projectModel';
import Role from './roleModel';
import StatusCategory from './statusCategoryModel';
import Status from './statusModel';
import Token from './tokenModel';
import User from './userModel';
import Bill from './billModel';

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

Project.hasOne(Bill);
Bill.belongsTo(Project);

export {
  Project, User, Role, Item, Comment, Status, StatusCategory, Token, Bill,
};
