import { api } from '../hooks/useAxios';

const logIn = (payload) => {
  return api.post('/user/login', payload);
};

export {
  logIn
};