import React from 'react';
import ImgBg from '../../assets/img/register.png';
import './index.scss';

const details = [
  {
    type: 'text',
    name: 'name',
    placeholder: 'First name',
  },
  {
    type: 'password',
    name: 'name',
    placeholder: 'Last name',
  },
  {
    type: 'text',
    name: 'email',
    placeholder: 'E-mail',
  },
  {
    type: 'password',
    name: 'password',
    placeholder: 'Your password',
  },
  {
    type: 'password',
    name: 'password',
    placeholder: 'Confirm password',
  },
];

const Register = () => (
  <div className="register">
    <div className="register__img">
      <img src={ImgBg} alt="nature" />
    </div>
    <div className="register__form">
      <h2 className="register__title"> Register</h2>
      <h3 className="register__subtitle">
        Please enter your name and e-mail address for the registration.
      </h3>
      <form className="register__details">
        {details.map((el) => (
          <div className="register__inner">
            <input type={el.type} name={el.name} placeholder={el.placeholder} required />
          </div>
        ))}
      </form>
      <button type="button" className="register__btn"> Register</button>
    </div>
  </div>
);

export default Register;
