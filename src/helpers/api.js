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
    getAll: () => Axios.get('/hotel'),
    createHotel: (data) => Axios.post('/hotel', data),
    uploadImage: (hotelId, file) => Axios.uploadFile(`image/upload/${hotelId}`, file),
  }, 
  profile: {
    changeBasicInfo: (data) => Axios.put('/users', data),
    createCompanyInfo: (data) => Axios.post('/companies', data),
    updateCompanyInfo: (data, id) => Axios.put(`/companies/${id}`, data)
  },
};
