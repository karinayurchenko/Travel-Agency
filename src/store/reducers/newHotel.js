import { CREATE_HOTELS_SUCCESS, CREATE_HOTELS_FAIL, CREATE_HOTELS_REQUEST } from '../actions/newHotel';

const initialState = {
  hotels: [],
  loading: false,
};

const hotelsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_HOTELS_SUCCESS: {
      return {
        ...state,
        loading: false,
      };
    }
    case CREATE_HOTELS_FAIL: {
      console.log(action)
      return {
        ...state,
        loading: false,
      };
    }
    case CREATE_HOTELS_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    default: return state;
  }
};

export default hotelsReducer;
