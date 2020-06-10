import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import ImgBg from '../../assets/img/login.png';
import Details from '../../constants/login';
import './index.scss';
import { loginUser } from '../../store/actions/user';

const Login = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({});
  const history = useHistory();
  const saveDataFromUser = (name) => (e) => {
    setData({
      ...data, 
      [name]: e.target.value,
    });
  };

  const getLoginForUser = (e) => {
    e.preventDefault();
    dispatch(loginUser(data, history));
  };

  return (
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
        <form className="login__details" onSubmit={getLoginForUser}>
          {Details.map((el) => (
            <div className="login__inner">
              <input type={el.type} name={el.name} placeholder={el.placeholder} required onChange={saveDataFromUser(el.name)} />
            </div>
          ))}
          <div className="forgot">
          <NavLink exact to="./" href="#" className="login__forgot"> I forgot my password </NavLink>
          </div>
          <div className="login__remember">
            <div className="login__inner-remember">
              <label>
                <input type="radio" name="remember" />
                <span>Remember me</span>
              </label>
            </div>
          </div>
          <button type="submit" className="login__btn"> Log in</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
