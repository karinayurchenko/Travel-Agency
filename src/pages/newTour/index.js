/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { info, dates } from '../../constants/infoTour';
import './index.scss';


const NewTour = () => (
  <div className="newTour">
    <div className="newTour__title">New Tour Info</div>
    <div className="newTour__type">
      {info.map((el) => (
        <div className="type__inner">
          <div className="type__label">{el.label}</div>
          <select name={el.name} className="select__hotel">
            <option value disabled selected>{el.default}</option>
            <option value="">{el.option1}</option>
            <option value="">{el.option2}</option>
            <option value="">{el.option3}</option>
          </select>
        </div>
      ))}
    </div>

    <form className="newTour__address">
      <div className="address">
        <label>
          Address
        </label>
        <input type="address" name="address" placeholder="country,city,street (not editable field)" />
      </div>
    </form>

    <select multiple size="1" className="newTour__services">
      <option value="">Basic</option>
      <option value="">Parties</option>
      <option value="">Swimming pool</option>
      <option value="">Beach</option> 
    </select>

    <div className="newTour__booking-date">
      {dates.map((el) => (
        <form className="date__form">
          <div className="dates">
            <label>
              {el.label}
            </label>
            <input type={el.type} name={el.name} />
          </div>
        </form>
      ))}
      <form className="newTour__price">
        <label>
          Price
        </label>
        <button type="button" className="currency">$</button>
        <input type="price" name="price" />
      </form>
    </div>
    <div className="btn">
    <button type="button" className="newTour__create-btn">Create tour</button>
    </div>
  </div>
);

export default NewTour;
