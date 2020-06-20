import { CREATE_HOTELS_SUCCESS, CREATE_HOTELS_FAIL } from '../actions/newHotel';

const initialState = {
  hotels: [],
};

const hotelsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_HOTELS_SUCCESS: {
      return {
        ...state,
      };
    }
    default: return state;
  }
};

export default hotelsReducer;
