import axios from 'axios';

const apiClient = axios.create({
  baseURL: '/api', // Usa el proxy configurado en Next.js
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;