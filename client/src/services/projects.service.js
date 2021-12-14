import api from '../hooks/useAxios';

const getAllProjects = () => {
  return api.get('/projects');
};

const createProject = (payload) => {
  return api.post('/projects', payload);
};

export {
  getAllProjects,
  createProject
};
