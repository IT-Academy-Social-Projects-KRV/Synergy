import api from '../hooks/useAxios';

const logIn = (payload) => {
  return api.post('/users/login', payload);
};

const userChanges = (payload) => {
  return api.post('/settings/', payload);
};

const register = (payload) => {
  return api.post('/users/register', payload);
};

const userList = (payload) => {
  return api.get('/users', payload);
};

export {
  logIn,
  register,
  userChanges,
  userList,
};
