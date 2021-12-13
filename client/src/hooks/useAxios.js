import axios from 'axios';

const baseUrl = 'http://localhost:4000/api/';

const baseAxios = axios.create({
  baseUrl,
});

export { baseAxios as api };
