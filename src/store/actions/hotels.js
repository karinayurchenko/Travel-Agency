import Api from '../../helpers/api';

export const GET_HOTELS_REQUEST = 'GET_HOTELS_REQUEST';
export const GET_HOTELS_SUCCESS = 'GET_HOTELS_SUCCESS';
export const GET_HOTELS_FAIL = 'GET_HOTELS_FAIL';

export const FIND_HOTELS_REQUEST = 'FIND_HOTELS_REQUEST';
export const FIND_HOTELS_SUCCESS = 'FIND_HOTELS_SUCCESS ';
export const FIND_HOTELS_FAIL  = 'FIND_HOTELS_FAIL ';

export const getHotels = () => (dispatch) => {
  dispatch ({type: GET_HOTELS_REQUEST})
  Api.hotel.getAll() 
    .then((data) => dispatch({
      type: GET_HOTELS_SUCCESS, payload: data.data.items,
    }))
    .catch((data) => (dispatch({ type: GET_HOTELS_FAIL, payload: data })));
};

export const findHotel = (target) => (dispatch) => {
  dispatch ({type: FIND_HOTELS_REQUEST})
  Api.hotel.findHotel(target)
  .then( (data) => dispatch ({
    type: FIND_HOTELS_SUCCESS, payload: data.data.items,
  }))
  .catch((data) => (dispatch({ type: FIND_HOTELS_FAIL, payload: data })));
}