import React from 'react';
import {
  inputs, details, addresses, cities,
} from '../../constants/profile';
import Validator from '../../helpers/validator';
import './index.scss';

const Profile = () => {
  Validator.isEmailValid('')
  return (
  <div className="profile">
    <div className="profile__section">
      <div className="section__title">Basic Info</div>
      <form className="section__input">
        {inputs.map((el) => (
          <div className="input__inner">
            <label>
              {el.label}
            </label>
            <input type={el.type} name={el.name} placeholder={el.placeholder} required />
          </div>
        ))}
      </form>
      <button type="button" className="section__btn">Save</button>
    </div>

    <div className="profile__section">
      <div className="section__title">Company Info</div>
      <form className="company__details">
        {details.map((el) => (
          <div className="input__inner">
            <label>
              {el.label}
            </label>
            <input type={el.type} name={el.name} placeholder={el.placeholder} required />
          </div>
        ))}
      </form>

      <form className="company__addresses">
        {addresses.map((el) => (
          <div className="input__inner">
            <label>
              {el.label}
            </label>
            <input type={el.type} name={el.name} placeholder={el.placeholder} />
          </div>
        ))}
      </form>

      <form className="company__city">
        {cities.map((el) => (
          <div className="input__inner">
            <label>{el.label}</label>
            <input type={el.type} name={el.name} />
          </div>
        ))}
      </form>

      <button type="button" className="section__btn">Sign in</button>
    </div>

  </div>
 )
};

export default Profile;
