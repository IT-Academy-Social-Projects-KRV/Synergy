import api from '../hooks/useAxios';

const getItemById = (id) => {
  return api.get(`/items/${id}`);
};

const createItem = (payload) => {
  return api.post('/items', payload);
};

export {
  getItemById,
  createItem
};