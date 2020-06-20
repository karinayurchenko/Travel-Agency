import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  inputs, details, addresses, cities,
} from '../../constants/profile';
import { uploadProfile, updateBasicInfo, changeProfile } from '../../store/actions/profile';
import Spinner from '../../components/general/spinner';
import './index.scss';

const Profile = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.profile.user);
  const company = useSelector((state) => state.profile.company);
  const loading = useSelector((state) => state.profile.loading);

  const onChangeBasicHandle = (name, value) => {
    dispatch(updateBasicInfo({
      [name]: value,
    }));
  };

  const submitBasicInfo = (e) => {
    e.preventDefault();
    dispatch(changeProfile(user));
  };

  useEffect(() => {
    dispatch(uploadProfile());
  }, []);

  if (loading) {
    return (
      <div className="spinner"><Spinner /></div>
    );
  }

  return (
    <div className="profile">
      <div className="profile__section">
        <div className="section__title">Basic Info</div>
        <form className="section__input" onSubmit={submitBasicInfo}>
          {inputs.map((el) => (
            <div className="input__inner">
              <label>
                {el.label}
              </label>
              <input onChange={(e) => onChangeBasicHandle(el.name, e.target.value)} defaultValue={user[el.name]} type={el.type} name={el.name} placeholder={el.placeholder} />
            </div>
          ))}
          <button type="submit" className="section__btn">Save</button>
        </form>
      </div>

      <div className="profile__section">
        <div className="section__title">Company Info</div>
        <form className="company__details">
          {details.map((el) => (
            <div className="input__inner">
              <label>
                {el.label}
              </label>
              <input defaultValue={company[el.name]} type={el.type} name={el.name} placeholder={el.placeholder} required />
            </div>
          ))}

          <div className="company__addresses">
            {company.address && addresses.map((el) => (
              <div className="input__inner">
                <label>
                  {el.label}
                </label>
                <input defaultValue={company.address[el.name]} type={el.type} name={el.name} placeholder={el.placeholder} />
              </div>
            ))}
          </div>

          <div className="company__city">
            {company.address && cities.map((el) => (
              <div className="input__inner">
                <label>{el.label}</label>
                <input defaultValue={company.address[el.name]} type={el.type} name={el.name} />
              </div>
            ))}
          </div>
          <button type="button" className="section__btn">Sign in</button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
