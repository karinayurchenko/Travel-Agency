import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Images from '../../constants/imgNewHotel';
import './index.scss';
import { createHotel } from '../../store/actions/newHotel';

const NewHotel = () => {
  const [formData, setformData] = useState({});
  const dispatch = useDispatch();

  const updateDataGeneral = (name, value) => {
    setformData({
      ...formData,
      [name]: value,
    });
  };

  const updateAddress = (name, value) => {
    setformData({
      ...formData,
      address: { ...formData.address, [name]: value },
    });
  };


  const updateLocation = (name, value) => {
    setformData({
      ...formData,
      address: {
        ...formData.address,
        location: {
          ...formData.address.location,
          [name]: value,
        },
      },
    });
  };

  const confirm = (e) => {
    e.preventDefault();
    dispatch(createHotel(formData));
  };

  return (
    <div className="newHotel">
      <form onSubmit={confirm} className="newHotel__content">
        <div className="right__block">
          <div className="newHotel__title">Please describe your hotel:</div>
          <div className="hotel__descr">
            <div className="details">
              <input onChange={(e) => updateDataGeneral('name', e.target.value)} type="text" name="name" placeholder="Name*" className="name_input" required />
              <div className="country__phone">
                <select onChange={(e) => updateAddress('country', e.target.value)} name="country" className="select__country" required>
                  <option value=""> Select country</option>
                  <option value="Turkey">Turkey</option>
                  <option value="Egypt">Egypt</option>
                  <option value="Georgia">Georgia</option>
                </select>
                <input onChange={(e) => updateDataGeneral('phone', e.target.value)} type="text" name="phone" placeholder="Contact Phone*" className="phone_input" required />
              </div>
              <div className="city__region">
                <input onChange={(e) => updateAddress('city', e.target.value)} type="text" name="city" placeholder="City*" className="city_input" required />
                <input onChange={(e) => updateAddress('state', e.target.value)} type="text" name="region" placeholder="Region/State" className="region_input" required />
              </div>
              <div className="location">
                <input onChange={(e) => updateAddress('street', e.target.value)} type="text" name="street" placeholder="Street" className="street_input" required />
                <input onChange={(e) => updateLocation('latitude', e.target.value)} type="text" name="lat" placeholder="Location lat" className="lat_input" required />
                <input onChange={(e) => updateLocation('longtitude', e.target.value)} type="text" name="lng" placeholder="Location lng" className="lng_input" required />
              </div>
              <div className="more__aboutHotel">
                <textarea onChange={(e) => updateDataGeneral('description', e.target.value)} name="details__description" placeholder="Hotel description*" rows="5" required />
              </div>
            </div>
          </div>

          <div className="hotel__imgs">
            {Images.map((el) => (
              <div className="img__block">
                <i className="far fa-window-close cancelIcon" />
                <img src={el.url} className="cancelImg" alt="" />
              </div>
            ))}
          </div>

          <div className="upload__btn">
            <button type="submit" className="upload__imgs"> Upload Images</button>
          </div>
          <div className="newHotel__btn">
            <button type="submit" className="confirm__btn">Confirm</button>
          </div>
        </div>

        <div className="required__fields">
          <div className="required">*required fields</div>
        </div>
      </form>
    </div>
  );
};


// const encryptThis = (text) => {

//   const number=text.charCodeAt(0);
//   let result;
//   return text.split(" ").map(el => {
//      switch (el.length) {
//       case 0: return '';
//       case 1: return number;
//       case 2: return result=[number, el[1]];
//       case 3: return result=[number, el[2], el[1]];
//       default: return result=[number, el.slice(-1), el.slice(2,-1), el[1]];
//      }
//      return result.join('');
//     })
//     .join(" ")
//   }


export default NewHotel;
