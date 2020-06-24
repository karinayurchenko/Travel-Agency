import { GET_HOTELS_SUCCESS, GET_HOTELS_FAIL } from '../actions/hotels';
import { baseURL} from '../../helpers/axios';

const initialState = {
  hotels: [],
};

const hotelsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_HOTELS_SUCCESS: {
      return {
        ...state,
        hotels: action.payload.map((el) => ({
          ...el,
          mainImg: el.images.length ? baseURL+el.images[0].image : 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/No_image_3x4.svg/1200px-No_image_3x4.svg.png',
        })),
      };
    }
    default: return state;
  }
};

export default hotelsReducer;
