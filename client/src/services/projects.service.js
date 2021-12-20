import api from '../hooks/useAxios';

const getAllProjects = () => {
  return api.get('/projects');
};

const getProjectById = (id) => {
  return api.get(`/projects/${id}`);
};

const createProject = (payload) => {
  return api.post('/projects', payload);
};

export {
  getAllProjects,
  getProjectById,
  createProject
};
