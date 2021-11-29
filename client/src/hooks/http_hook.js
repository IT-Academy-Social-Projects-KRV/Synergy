import {useCallback, useState} from 'react';
import axios from 'axios';

const baseUrl = 'http://localhost:4000/api/';

const base_axios = axios.create({
  baseURL: baseUrl
});

export const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const get_request = useCallback(async (url) => {
    setLoading(true);
    try {
      const response = await base_axios.get(baseUrl + url);
      setLoading(false);
      return response;
    } catch (e) {
      setLoading(false);
      setError(e.message);
      throw e;
    }
  }, []);

  const post_request = useCallback(async (url, body) => {
    setLoading(true);
    try {
      const response = await base_axios.post(baseUrl + url, body);
      const data = await response.data;
      setLoading(false);
      return data;
    } catch (e) {
      setLoading(false);
      setError(e.message);
      throw e;
    }
  }, []);
  return {loading, error, get_request, post_request};
};