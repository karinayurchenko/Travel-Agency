import Axios from './axios';

export default {
  auth: {
    signUp: (data) => Axios.post('/register', data),
    login: (data) => Axios.post('/login', data),
    getCurrent: () => Axios.get('/me'),
    getUser: (id) => Axios.get(`/users/${id}`),
    getCompany: (id) => Axios.get(`/users/${id}/company`),
  },
  hotel: {
    getAll: () => Axios.get('/profile'),
    createHotel: (data) => Axios.post('/hotel', data),
  },
  profile: {
    changeBasicInfo: (data) => Axios.put('/users', data),
    changeCompanyInfo: (data) => Axios.put('/users/password', data),
  },
}; 
