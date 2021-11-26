const addStatusCategories = require('./StatusCategoryData');
const addStatuses = require('./StatusData');
const addProjects = require('./ProjectData');

exports.fillDb = () => {
  addStatusCategories();
  addStatuses();
  addProjects();
};
