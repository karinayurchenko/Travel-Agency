import { GET_HOTELS_SUCCESS, GET_HOTELS_FAIL, GET_HOTELS_REQUEST, FIND_HOTELS_REQUEST, FIND_HOTELS_SUCCESS, FIND_HOTELS_FAIL } from '../actions/hotels';
import { baseURL} from '../../helpers/axios';

const initialState = {
  hotels: [], 
  loading: false,
  
};

const hotelsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_HOTELS_REQUEST: {
      return{
        ...state,
        loading: true,
      }
    }
    case GET_HOTELS_SUCCESS: {
      return {
        ...state,
        hotels: action.payload.map((el) => ({
          ...el,
          mainImg: el.images.length ? baseURL+el.images[0].image : 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/No_image_3x4.svg/1200px-No_image_3x4.svg.png',
        })),
        loading: false,
      };
    }
    case GET_HOTELS_FAIL: {
      return{
        ...state,
        loading: false,
      } 
    }
    case FIND_HOTELS_REQUEST: {
      return{
        ...state,
      } 
    }
    case FIND_HOTELS_SUCCESS: {
      return{
        ...state,
        hotels: action.payload.map((el) => ({
          ...el,
          mainImg: el.images.length ? baseURL+el.images[0].image : 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/No_image_3x4.svg/1200px-No_image_3x4.svg.png',
        })),
      } 
    }
    case FIND_HOTELS_FAIL: {
      return{
        ...state,
      } 
    }
    default: return state;
  }
};

export default hotelsReducer;
