import api from '../hooks/useAxios';

const logIn = (payload) => {
  return api.post('/user/login', payload);
};

const register = (payload) => {
  return api.post('/users/register', payload);
};

export {
  logIn,
  register,
};
