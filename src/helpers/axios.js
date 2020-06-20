/* eslint-disable no-param-reassign */
import axios from 'axios';

const baseURL = 'http://b378ae1395ba.ngrok.io/';
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
    config.headers.Authorization = `bearer ${token}`;
  }
  config.data = config.data || {};
  return config;
}, (error) => {
  console.log(error.response.status);
  Promise.reject(error);
});

instance.interceptors.response.use((response) => response, (error) => {
  if (error.response.status === 401) {
    // window.location = '/login';
    // localStorage.clear();
    // swal({
    //   title: 'Session Expired',
    //   text: 'Your session has expired. Would you like to be redirected to the login page?',
    //   type: 'warning',
    //   showCancelButton: true,
    //   confirmButtonColor: '#DD6B55',
    //   confirmButtonText: 'Yes',
    //   closeOnConfirm: false,
    // }, () => {
    //   window.location = '/login';
    // });
  } else {
    return Promise.reject(error);
  }
});

export default instance;
