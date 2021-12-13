const item = require('./item');
const project = require('./project');
const comment = require('./comment');

module.exports = {
  paths: {
    ...item,
    ...project,
    ...comment,
  },
};
