/* eslint-disable no-param-reassign */
import axios from 'axios';

const baseURL = 'http://ef24faf357b4.ngrok.io';
const instance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});
instance.uploadFile = (url, bodyFormData) => axios({
  method: 'post',
  url: `${baseURL}${url}`,
  data: bodyFormData,
  headers: {
    'Content-Type': 'multipart/form-data',
    Accept: 'application/json',
  },
});
// token interceptor
instance.interceptors.request.use((config) => {
  const { token } = localStorage;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  config.data = config.data || {};
  return config;
}, (error) => Promise.reject(error));
export default instance;