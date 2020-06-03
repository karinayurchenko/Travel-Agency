import Axios from './axios';

export default {
  auth: {
    signUp: (data) => Axios.post('/register', data),
  },
};
