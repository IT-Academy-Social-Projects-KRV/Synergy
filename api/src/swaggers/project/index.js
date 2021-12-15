const getProjects = require('./getProjects');
const getProject = require('./getProject');
const createProject = require('./createProject');
const updateProject = require('./updateProject');
const deleteProject = require('./deleteProject');

module.exports = {
  '/api/projects': {
    ...getProjects,
    ...createProject,
  },
  '/api/projects/{id}': { ...getProject, ...updateProject, ...deleteProject },
};
