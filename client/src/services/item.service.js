import api from '../hooks/useAxios';

const getItemById = (id) => {
  return api.get(`/items/${id}`);
};

const createItem = (payload) => {
  return api.post('/items', payload);
};

const updateItem = (payload, id) => {
  return api.patch(`/items/${id}`, payload);
};

export {
  getItemById,
  createItem,
  updateItem,
};