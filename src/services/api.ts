import axios from 'axios';
import { apiBaseUrl } from '../utils/environment';
import { redirectToLogin } from '../utils/navigationHelper';

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
      redirectToLogin();
    }
    return Promise.reject(error);
  }
);

export default api;
