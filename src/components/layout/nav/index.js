import React from 'react';
import './index.scss';

const Nav = () => (
  <div className="nav">
    <div className="nav__inner">
      <div className="leftBlock">
        <div className="leftBlock__icon">
          <i className="fas fa-bars" />
        </div>
      </div>
      <div className="rightBlock">
        <div className="rightBlock__icons">
          <i className="far fa-envelope" />
        </div>
        <div className="rightBlock__avatar">
          <img src="https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png" alt="avatar" />
        </div>
        <div className="rightBlock__username"> Jonh Doe</div>
      </div>
    </div>
  </div>
);

export default Nav;
