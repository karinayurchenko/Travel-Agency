import {
  UPLOAD_PROFILE, UPLOAD_PROFILE_REQUEST, UPLOAD_PROFILE_FAIL, CHANGE_PROFILE_BASIC, UPDATE_PROFILE_BASIC,
} from '../actions/profile';

const initialState = {
  user: {},
  company: {
    address: {},
  },
  loading: false,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPLOAD_PROFILE: {
      return {
        ...state,
        user: action.payload[0].data,
        company: action.payload[1].data,
        loading: false,
      };
    }
    case UPLOAD_PROFILE_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case UPLOAD_PROFILE_FAIL: {
      return {
        ...state,
        loading: false,
      };
    }
    case CHANGE_PROFILE_BASIC: {
      return {
        ...state,
      };
    }
    case UPDATE_PROFILE_BASIC: {
      return {
        ...state,
        user: { ...state.user, ...action.payload },
      };
    }
    default: return state;
  }
};

export default profileReducer;
