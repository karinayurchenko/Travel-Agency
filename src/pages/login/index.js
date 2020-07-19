import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import ImgBg from '../../assets/img/login.png';
import Details from '../../constants/login';
import { loginUser } from '../../store/actions/user';
import PasswordInput from '../../components/password';
import { Formik } from 'formik';
import './index.scss';

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  
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

        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={(values, actions) => {
            dispatch(loginUser(values, history))
          }}
        >
       {props => (
         <form className="login__details" onSubmit={props.handleSubmit}>
         {Details.map((el) => (
             <div className="register__inner">
            {el.type === 'password' ? 
            <PasswordInput 
                type={el.type} 
                name={el.name} 
                placeholder={el.placeholder} 
                required 
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values[el.name]} />
            : <input 
                type={el.type} 
                name={el.name} 
                placeholder={el.placeholder} 
                required 
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values[el.name]}  />}
                {props.errors[el.name] && <div id="feedback">{props.errors[el.name]}</div>}
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
       )}
     </Formik>

        {/* <form className="login__details" onSubmit={getLoginForUser}>
        {Details.map((el) => (
            <div className="register__inner">
              {el.type === 'password' ? <PasswordInput type={el.type} name={el.name} placeholder={el.placeholder} required /> : <input type={el.type} name={el.name} placeholder={el.placeholder} required  />}
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
        </form> */}
      </div>
    </div>
  );
};

export default Login;
