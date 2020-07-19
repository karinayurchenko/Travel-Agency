import { toast } from 'react-toastify'; 
import Api from '../../helpers/api';

export const CREATE_HOTELS_SUCCESS = 'GET_HOTELS_SUCCESS';
export const CREATE_HOTELS_FAIL = 'GET_HOTELS_FAIL';
export const CREATE_HOTELS_REQUEST = 'GET_HOTELS_REQUEST';

export const createHotel = (hotel, files) => (dispatch) => {
  dispatch({ type: CREATE_HOTELS_REQUEST });
  Api.hotel.createHotel(hotel)
    .then((data) => {
      Promise.all(files.map((file) => Api.hotel.uploadImage(data.data.objectId, file)))
        .then((el) => console.log(el));
      toast.info('Hotel has been created!', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      dispatch({ type: CREATE_HOTELS_SUCCESS, payload: data });
    })
    .catch((data) => {
      toast.error(data, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      dispatch({ type: CREATE_HOTELS_FAIL, payload: data });
    });
};
