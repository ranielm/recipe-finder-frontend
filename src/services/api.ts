import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const apiBaseUrl = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: apiBaseUrl,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      localStorage.removeItem('authToken');
      const navigate = useNavigate();
      navigate('/');
    }
    return Promise.reject(error);
  }
);

export default api;
