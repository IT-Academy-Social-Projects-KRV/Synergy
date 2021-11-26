const addStatusCategories = require('./StatusCategoryData');
const addStatuses = require('./StatusData');
const addProjects = require('./ProjectData');

const fillDb = () => {
  addStatusCategories();
  addStatuses();
  addProjects();
};

module.exports = {
  fillDb,
};
