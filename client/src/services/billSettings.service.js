import api from '../hooks/useAxios';

const getPdfSettings = (id) => {
  return api.get(`/bill-settings/${id}`, { responseType: 'blob' });
};

export {
  getPdfSettings
};