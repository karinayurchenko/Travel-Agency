import { GET_HOTELS_SUCCESS, GET_HOTELS_FAIL } from '../actions/hotels';

const initialState = {
  hotels: [],
};

const hotelsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_HOTELS_SUCCESS: {
      return {
        ...state,
        hotels: action.payload,
      };
    }
    default: return state;
  }
};

export default hotelsReducer;
