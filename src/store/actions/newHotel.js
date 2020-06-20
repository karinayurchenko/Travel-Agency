import Api from '../../helpers/api';

export const CREATE_HOTELS_SUCCESS = 'GET_HOTELS_SUCCESS';
export const CREATE_HOTELS_FAIL = 'GET_HOTELS_FAIL';

export const createHotel = (hotel) => (dispatch) => {
  Api.hotel.createHotel(hotel)
    .then((data) => dispatch({ type: CREATE_HOTELS_SUCCESS, payload: data }))
    .catch((data) => dispatch({ type: CREATE_HOTELS_FAIL, payload: data }));
};
