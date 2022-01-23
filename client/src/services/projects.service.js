import api from '../hooks/useAxios';

const getAllProjects = () => {
  return api.get('/projects');
};

const getSortProjects = (
  { 
    name, 
    capital, 
    dateStart, 
    dateFinish, 
    sortBy = 'capital', 
    sortDirection = 'ASC',
    page
  },
) => {
  return api.get('/projects', { 
    params: {
      name, 
      capital: `${capital[0]}-${capital[1]}`, 
      dateStart, 
      dateFinish, 
      sortBy,
      sortDirection,
      page
    } 
  });
};

const getProjectById = (id) => {
  return api.get(`/projects/${id}`);

};

const getProjectForAccount = (
  {
    userId
  },
) => {
  return api.get('/projects', {
    params: {
      userId
    }
  });
};

const createProject = (payload) => {
  return api.post('/projects', payload);
};

export {
  getAllProjects,
  createProject,
  getSortProjects,
  getProjectById,
  getProjectForAccount,
};
