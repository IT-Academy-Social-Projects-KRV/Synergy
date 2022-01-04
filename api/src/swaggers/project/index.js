import getProjects from './getProjects';
import getProject from './getProject';
import createProject from './createProject';
import updateProject from './updateProject';
import deleteProject from './deleteProject';

export default {
  '/api/projects': {
    ...getProjects,
    ...createProject,
  },
  '/api/projects/{id}': { ...getProject, ...updateProject, ...deleteProject },
};
