import api from '../hooks/useAxios';

const getAllProjects = () => {
  return api.get('/projects');
};

// eslint-disable-next-line max-len
const getSortProjects = (
  { name, capital, dateStart, dateFinish, sortBy = 'capital', sortDirection = 'ASC' }, page = 1) => {
  // eslint-disable-next-line max-len
  return api.get(`/projects?size=10&sortBy=${sortBy}&sortDirection=${sortDirection}&capital=${capital[0]}-${capital[1]}&name=${name}&page=${page}&dateStart=${dateStart}&dateFinish=${dateFinish}`);

const getProjectById = (id) => {
  return api.get(`/projects/${id}`);

};

const createProject = (payload) => {
  return api.post('/projects', payload);
};

export {
  getAllProjects,
  createProject,
  getSortProjects,
  getProjectById
};
