import api from '../hooks/useAxios';

const logIn = (payload) => {
  return api.post('/users/login', payload);
};

const userChanges = (payload) => {
  return api.post('/settings/', payload);
};

export {
  logIn, userChanges,
};

