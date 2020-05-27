import React from 'react';
import { NavLink } from 'react-router-dom';
import ImgBg from '../../assets/img/login.png';
import './index.scss';

const details = [
  {
    type: 'text',
    name: 'email',
    placeholder: 'Your e-mail',
  },
  {
    type: 'password',
    name: 'password',
    placeholder: 'Your password',
  },
];

const Login = () => (
  <div className="login">
    <div className="login__img">
      <img src={ImgBg} alt="nature" />
    </div>
    <div className="login__form">
      <h2 className="login__title"> Log in</h2>
      <h3 className="login__subtitle">
        If you don`t have your account yet, please
        <NavLink exact to="./" href="#" className="login__register"> register </NavLink>
        first.
      </h3>
      <form className="login__details">
        {details.map((el) => (
          <div className="login__inner">
            <input type={el.type} name={el.name} placeholder={el.placeholder} required />
          </div>
        ))}
      </form>
      <NavLink exact to="./" href="#" className="login__forgot"> I forgot my password </NavLink>
      <form className="login__remember">
        <div className="login__inner-remember">
          <label>
            <input type="radio" name="remember" />
            <span>Remember me</span>
          </label>
        </div>
      </form>
      <button type="button" className="login__btn"> Log in</button>
    </div>
  </div>
);

export default Login;
