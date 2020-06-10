import Axios from './axios';

export default {
  auth: {
    signUp: (data) => Axios.post('/register', data),
    login: (data) => Axios.post('/login', data),

  },
  hotel: {
    getAll: () => Axios.get('/hotel'),
  },
};
