import React from 'react';
import './index.scss';
import { NavLink } from 'react-router-dom';
import Logo from '../../../assets/img/logo.png';

const links = [
  {
    label: 'Dashboard',
    icon: 'fab fa-dashcube',
    link: '/',
  },
  {
    label: 'Tours',
    icon: 'fas fa-copy',
    link: '/',
  },
  {
    label: ' Hotels',
    icon: 'fas fa-building',
    link: '/',
  },
];

const Sidebar = () => (
  <div className="sidebar">
    <div className="sidebar__wrapper">
      <img src={Logo} alt="logo" />
      <h2>Adminator</h2>
    </div>
    <div className="sidebar__list">
      {links.map((el) => (
        <div className="sidebar__list__item">
          <div className="items__icon">
            <i className={el.icon} />
          </div>
          <NavLink exact to={el.link} href={el.link} activeClassName="activeLink">
            {el.label}
          </NavLink>
        </div>
      ))}
    </div>
  </div>
);

export default Sidebar;
