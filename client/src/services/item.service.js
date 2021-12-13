import api from '../hooks/useAxios';

const createItem = (payload) => {
  return api.post('/items', payload);
};

export {
  createItem
};