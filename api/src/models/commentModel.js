import { DataTypes } from 'sequelize';
import sequelize from '../../db';

const Comment = sequelize.define('comment', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  content: { type: DataTypes.TEXT, allowNull: false },
});

export default Comment;
