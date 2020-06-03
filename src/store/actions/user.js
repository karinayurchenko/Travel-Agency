/* eslint-disable import/prefer-default-export */
import Api from '../../helpers/api';

export const registerUser = (data, history) => (dispatch) => {
  Api.auth.signUp(data)
    .then((res) => {
      localStorage.setItem('token', res.data.access_token);
      localStorage.setItem('refreshToken', res.data.refresh_token);
      history.push('/');
    })
    .catch(() => console.log('error'));
};
