import Api from '../../helpers/api';

export const GET_HOTELS_SUCCESS = 'GET_HOTELS_SUCCESS';
export const GET_HOTELS_FAIL = 'GET_HOTELS_FAIL';
export const CREATE_HOTELS_SUCCESS = 'GET_HOTELS_SUCCESS';
export const CREATE_HOTELS_FAIL = 'GET_HOTELS_FAIL';

export const getHotels = () => (dispatch) => {
  Api.hotel.getAll()
    .then((data) => dispatch({ type: GET_HOTELS_SUCCESS, payload: data.data.items }));
};

export const createHotel = () => (dispatch) => {
  Api.hotel.createHotel()
    .then((data) => dispatch({ type: GET_HOTELS_SUCCESS, payload: data }))
    .catch((data) => dispatch({ type: GET_HOTELS_FAIL, payload: data }));
};
