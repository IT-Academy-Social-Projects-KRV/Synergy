import axios from 'axios';

const baseUrl = 'http://localhost:4000/api/';

const baseAxios = axios.create({
  baseUrl
});

export const useHttp = () => {
  const getRequest = async (url) => {
    try {
      const response = await baseAxios.get(baseUrl + url);
      return response;
    }catch (e) {
      throw new Error(e);
    }
  };

  const postRequest = async (url, body) => {
    try {
      const response = await baseAxios.post(baseUrl + url, body);
      const data = await response.data;
      return data;
    } catch (e) {
      throw new Error(e);
    }
  };
  return {getRequest, postRequest };
};