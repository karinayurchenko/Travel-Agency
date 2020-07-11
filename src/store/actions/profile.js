import Api from '../../helpers/api';

export const UPLOAD_PROFILE = 'UPLOAD_PROFILE';
export const UPLOAD_PROFILE_REQUEST = 'UPLOAD_PROFILE_REQUEST';
export const UPLOAD_PROFILE_FAIL = 'UPLOAD_PROFILE_FAIL';
export const CHANGE_PROFILE_BASIC = 'CHANGE_PROFILE_BASIC';
export const UPDATE_PROFILE_BASIC = 'UPDATE_PROFILE_BASIC';
export const CREATE_COMPANY_INFO_SUCCESS = 'CREATE_COMPANY_INFO';
export const CREATE_COMPANY_INFO_FAIL = 'CREATE_COMPANY_INFO_FAIL';
export const UPDATE_COMPANY_INFO = 'UPDATE_COMPANY_INFO';

export const uploadProfile = () => async (dispatch) => {
  dispatch({ type: UPLOAD_PROFILE_REQUEST });
  const userCurrent = await Api.auth.getCurrent();
  const payload = [];
  try {
    payload[0] = await Api.auth.getUser(userCurrent.data.objectId);
    payload[1] = await Api.auth.getCompany(userCurrent.data.objectId);
    dispatch({ type: UPLOAD_PROFILE, payload });
  } catch (e) {
    dispatch({ type: UPLOAD_PROFILE, payload });
    dispatch({ type: UPLOAD_PROFILE_FAIL });
  }
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

export const createCompanyInfo = (data) => ({
  type: CREATE_COMPANY_INFO_SUCCESS,
  payload: data,
});

export const updateCompanyInfo = (data) => async (dispatch) => {
  try {
    let company = {};
    if (data.id) {
      company = await Api.profile.updateCompanyInfo(data, data.id);
    } else {
      company = await Api.profile.createCompanyInfo(data);
      dispatch(createCompanyInfo({
        id: company.data.objectId,
      }));
    }
    dispatch({ type: CREATE_COMPANY_INFO_SUCCESS, payload: data });
  } catch (e) {
    console.log('error', e);
  }
};

export const saveCompanyInfo = (data) => ({
  type: UPDATE_COMPANY_INFO,
  payload: data,
});
