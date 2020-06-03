import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ImgBg from '../../assets/img/register.png';
import Details from '../../constants/register';
import Validator from '../../helpers/validator';
import { registerUser } from '../../store/actions/user';
import './index.scss';

const Register = () => {
  const [formData, setFormData] = useState({
    email: null,
    firstName: null,
    lastName: null,
    password: null,
    confirmPassword: null,
  });
  const [error, setError] = useState({
    email: null,
    firstName: null,
    lastName: null,
    password: null,
    confirmPassword: null,
  });

  const checkValidateForm = () => {
    setError({
      email: formData.email !== null && (Validator.isEmailValid(formData.email) ? null : 'valid email is required'),
      firstName: formData.firstName !== null && (Validator.isNameValid(formData.firstName) ? null : 'valid  first name is required'),
      lastName: formData.lastName !== null && (Validator.isNameValid(formData.lastName) ? null : 'valid  last name is required'),
      password: formData.password !== null && (Validator.isPasswordValid(formData.password) ? null : 'valid password is required'),
      confirmPassword: formData.confirmPassword !== null && (formData.password === formData.confirmPassword ? null : 'Password not matching')|| null,
    });
  };

  const handleChanges = (name) => (e) => {
    setFormData({
      ...formData,
      [name]: e.target.value,
    });
    checkValidateForm();
  };

  const dispatch = useDispatch();
  const history = useHistory();

  const register = (e) => {
    e.preventDefault();
    dispatch(registerUser(formData, history));
  };


  return (
    <div className="register">
      <div className="register__img">
        <img src={ImgBg} alt="nature" />
      </div>
      <div className="register__form">
        <h2 className="register__title"> Register</h2>
        <h3 className="register__subtitle">
          Please enter your name and e-mail address for the registration.
        </h3>
        <form className="register__details" onSubmit={register}>
          {Details.map((el) => (
            <div className="register__inner">
              <input type={el.type} name={el.name} placeholder={el.placeholder} required onChange={handleChanges(el.name)} />
              <div>{error[el.name]}</div>
            </div>
          ))}
          <button type="submit" className="register__btn"> Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
