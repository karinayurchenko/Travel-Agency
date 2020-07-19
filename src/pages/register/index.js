import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ImgBg from '../../assets/img/register.png';
import Details from '../../constants/register';
import Validator from '../../helpers/validator';
import { registerUser } from '../../store/actions/user';
import PasswordInput from '../../components/password';
import { Formik } from 'formik';
import * as Yup from 'yup'; 
import './index.scss';

const passwordRegExp = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/;

const Register = () => {
  
  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    lastName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    email: Yup.string()
      .email('Invalid email')
      .required('Required'),
      password:Yup.string()
      .min(8, "Ваш пароль має містити щонайменше 8 символів. Спробуйте ще раз.")
      .matches(passwordRegExp, "Введено неправильний пароль. Спробуйте ще раз.")
      .required("Потрібно вказати пароль"),
      confirmPassword: Yup.string()
      .required("Пароль має збігатись")
      .test("passwords-match", "Пароль не збігається", function (value) {
        return this.parent.password === value;
      }),
  });

  // const checkValidateForm = () => {
  //   setError({
  //     email: formData.email !== null && (Validator.isEmailValid(formData.email) ? null : 'valid email is required'),
  //     firstName: formData.firstName !== null && (Validator.isNameValid(formData.firstName) ? null : 'valid  first name is required'),
  //     lastName: formData.lastName !== null && (Validator.isNameValid(formData.lastName) ? null : 'valid  last name is required'),
  //     password: formData.password !== null && (Validator.isPasswordValid(formData.password) ? null : 'valid password is required'),
  //     confirmPassword: formData.confirmPassword !== null && (formData.password === formData.confirmPassword ? null : 'Password not matching'),
  //   });
  //   console.log(formData);
  // };

  // const handleChanges = (name) => (e) => {
  //   setFormData({
  //     ...formData,
  //     [name]: e.target.value,
  //   });
  //   checkValidateForm();
  // };
  const dispatch = useDispatch();
  const history = useHistory();


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

        <Formik
       initialValues={{ 
         email: '',
         password: '',
         firstName: '',
         lastName: '', 
         confirmPassword: '' }}
       validationSchema={SignupSchema}
       onSubmit={(values, actions) => {
        dispatch(registerUser(values, history))
       }}
     >
       {props => (
         <form className="register__details" onSubmit={props.handleSubmit}>
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

         <button type="submit" className="register__btn"> Register</button>
       </form>
       )}
     </Formik>

        {/* <form className="register__details" onSubmit={register}>
          {Details.map((el) => (
            <div className="register__inner">
              {el.type === 'password' ? <PasswordInput type={el.type} name={el.name} placeholder={el.placeholder} required onChange={handleChanges(el.name)} /> : <input type={el.type} name={el.name} placeholder={el.placeholder} required onChange={handleChanges(el.name)} />}
              <div>{error[el.name]}</div>
            </div> 
          ))}
          <button type="submit" className="register__btn"> Register</button>
        </form> */}
      </div>
    </div>
  );
};

export default Register;
