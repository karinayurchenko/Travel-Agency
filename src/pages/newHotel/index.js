import React from 'react';
import Images from '../../constants/imgNewHotel';
import './index.scss';

const NewHotel = () => (
  <div className="newHotel">
    <div className="newHotel__content">
      <div className="right__block">
        <div className="newHotel__title">Please describe your hotel:</div>
        <div className="hotel__descr">
          <form className="details">
            <input type="text" name="name" placeholder="Name*" className="name_input" />
            <div className="country__phone">
              <select name="country" className="select__country">
                <option value disabled selected>Ukraine</option>
                <option value="">Turkey</option>
                <option value="">Egypt</option>
                <option value="">Georgia</option>
              </select>
              <input type="text" name="phone" placeholder="Contact Phone*" className="phone_input" />
            </div>
            <div className="city__region">
              <input type="text" name="city" placeholder="City*" className="city_input" />
              <input type="text" name="region" placeholder="Region/State" className="region_input" />
            </div>
            <div className="location">
              <input type="text" name="street" placeholder="Street" className="street_input" />
              <input type="text" name="lat" placeholder="Location lat" className="lat_input" />
              <input type="text" name="lng" placeholder="Location lng" className="lng_input" />
            </div>
            <div className="more__aboutHotel">
              <textarea name="details__description" placeholder="Hotel description*" rows="5" />
            </div>
          </form>
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
      </div>

      <div className="required__fields">
        <div className="required">*required fields</div>
      </div>
    </div>

    <div className="newHotel__btn">
      <button type="submit" className="confirm__btn">Confirm</button>
    </div>
  </div>
);


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
