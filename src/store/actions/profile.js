import Api from '../../helpers/api';

export const UPLOAD_PROFILE = 'UPLOAD_PROFILE';
export const UPLOAD_PROFILE_REQUEST = 'UPLOAD_PROFILE_REQUEST';
export const UPLOAD_PROFILE_FAIL = 'UPLOAD_PROFILE_FAIL';
export const CHANGE_PROFILE_BASIC = 'CHANGE_PROFILE_BASIC';
export const UPDATE_PROFILE_BASIC = 'UPDATE_PROFILE_BASIC';

export const uploadProfile = () => (dispatch) => {
  dispatch({ type: UPLOAD_PROFILE_REQUEST });
  Api.auth.getCurrent()
    .then((res) => Promise.all([
      Api.auth.getUser(res.data.objectId),
      Api.auth.getCompany(res.data.objectId),
    ]))
    .then((res) => dispatch({ type: UPLOAD_PROFILE, payload: res }))
    .catch(() => dispatch({ type: UPLOAD_PROFILE_FAIL }));
};

export const changeProfile = () => (dispatch) => {
  Api.profile.changeBasicInfo()
    .then((res) => dispatch({ type: CHANGE_PROFILE_BASIC, payload: res.data }))
    .catch(() => console.log('error'));
};

export const updateBasicInfo = (data) => ({
  type: UPDATE_PROFILE_BASIC,
  payload: data,
});
