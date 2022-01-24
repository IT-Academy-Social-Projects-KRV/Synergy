import api from '../hooks/useAxios';

const createComment = (payload) => {
  return api.post('/comments', payload);
};

const getComments = (payload) => {
  return api.get('/comments', payload);
}; 

const deleteComment = (id) => {
  return api.delete(`/comments/${id}`, id);
};

export { createComment, getComments, deleteComment };