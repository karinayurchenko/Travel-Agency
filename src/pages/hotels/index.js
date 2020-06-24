import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Hotel from '../../components/hotel';
import Details from '../../constants/hotel';
import { getHotels } from '../../store/actions/hotels';
import './index.scss';

const Hotels = () => {
  const dispatch = useDispatch();
  const hotels = useSelector((state) => state.hotels.hotels);
  useEffect(() => {
    dispatch(getHotels());
  }, []);
  
  const history = useHistory();
  const redirectToPath = () => {
    history.push('/newHotel');
  };

  return (
    <div className="hotel">
      <div className="hotel__btn">
        <button className="add__btn" type="button" onClick={redirectToPath}> Add new hotel</button>
        <form className="find__hotel">
          <i className=" icon fas fa-search" />
          <input placeholder="Find hotel" />
        </form>
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
