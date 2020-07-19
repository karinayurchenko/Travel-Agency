import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Hotel from '../../components/hotel';
import Details from '../../constants/hotel';
import { getHotels } from '../../store/actions/hotels';
import Spinner from  '../../components/general/spinner';
import FindInput  from '../../components/findInput';
import { findHotel } from '../../store/actions/hotels';
import './index.scss';

const Hotels = () => {
  const dispatch = useDispatch();
  const hotels = useSelector((state) => state.hotels.hotels);
  const loading = useSelector((state) => state.hotels.loading);
  
  useEffect(() => {
    dispatch(getHotels());
  }, []);
  
  const history = useHistory();
  const redirectToPath = () => {
    history.push('/newHotel');
  };

 const findItem = (value) =>{
  dispatch(findHotel(value))
 }

  return (
    <div className="hotel">
      <div className="hotel__btn">
        <button className="add__btn" type="button" onClick={redirectToPath}> Add new hotel</button>
        <FindInput  debounceTime={1000} onChange={findItem } />
        {loading ? 
        (<div className="spinnerBackground">
            <div className="spinner">
              <Spinner />
            </div>
          </div>)
          : null} 
      </div>
      {hotels.map((el) => (
        <Hotel
          key={el.id}
          data={el}
        />
      ))}
    </div>
  );
};

export default Hotels;
