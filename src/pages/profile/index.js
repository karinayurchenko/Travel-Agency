import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  inputs, details, addresses, cities,
} from '../../constants/profile';
import {
  uploadProfile, updateBasicInfo, changeProfile, updateCompanyInfo, saveCompanyInfo,
} from '../../store/actions/profile';
import Spinner from '../../components/general/spinner';
import './index.scss';

const Profile = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.profile.user);
  const company = useSelector((state) => state.profile.company);
  const loading = useSelector((state) => state.profile.loading);

  console.log(company);

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

  const submitCompanyInfo = (e) => {
    e.preventDefault();
    dispatch(updateCompanyInfo({
      id: company.id,
      contactEmail: company.contactEmail,
      name: company.name,
      address: {
        country: 'USA',
        city: company.city,
        state: company.state,
        street: company.address1,
        address2: company.address2,
        zip: company.zip,
        location: {
          latitude: '0',
          longtitude: '0',
        },
      },
    }));
  };

  const onChangeCompanyHandle = (name, value) => {
    dispatch(saveCompanyInfo({
      [name]: value,
    }));
  };

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
        <form className="company__details" onSubmit={submitCompanyInfo}>
          {details.map((el) => (
            <div className="input__inner">
              <label>
                {el.label}
              </label>
              <input onChange={(e) => onChangeCompanyHandle(el.name, e.target.value)} defaultValue={company[el.name]} type={el.type} name={el.name} placeholder={el.placeholder} required />
            </div>
          ))}

          <div className="company__addresses">
            {company.address && addresses.map((el) => (
              <div className="input__inner">
                <label>
                  {el.label}
                </label>
                <input onChange={(e) => onChangeCompanyHandle(el.name, e.target.value)} defaultValue={company.address[el.name]} type={el.type} name={el.name} placeholder={el.placeholder} />
              </div>
            ))}
          </div>

          <div className="company__city">
            {company.address && cities.map((el) => (
              <div className="input__inner">
                <label>{el.label}</label>
                <input onChange={(e) => onChangeCompanyHandle(el.name, e.target.value)} defaultValue={company.address[el.name]} type={el.type} name={el.name} />
              </div>
            ))}
          </div>
          <button type="submit" className="section__btn">Save</button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
