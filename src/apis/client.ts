import axios from 'axios';

const client = axios.create({
  baseURL: 'https://notion-blog.2051120240.workers.dev',
});

client.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

client.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default client;
