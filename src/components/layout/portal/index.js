import React from 'react';
import './index.scss';

const Portal = () => (
  <div className="portal">
    <div className="portal__buttons">
      <div className="icon"><i className="fas fa-user-alt" /></div>
      <div className="button">Profile</div>
    </div>
    <div className="portal__buttons">
      <div className="icon"><i className="fas fa-sign-out-alt" /></div>
      <div className="button">Logout</div>
    </div>
  </div>
);

export default Portal;
