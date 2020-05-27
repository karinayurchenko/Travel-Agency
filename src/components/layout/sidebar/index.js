import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Logo from '../../../assets/img/logo.png';
import { toggleSidebar } from '../../../store/actions/general';
import './index.scss';

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

const Sidebar = () => {
  const opened = useSelector((state) => state.general.sidebarOpened);
  const dispatch = useDispatch();

  const openSidebar = () => {
    dispatch(toggleSidebar(true));
  };
  const closeSidebar = () => {
    dispatch(toggleSidebar(false));
  };

  return (
    <div className={opened ? 'sidebar' : ' sidebar closed__sidebar'} onMouseEnter={openSidebar} onMouseLeave={closeSidebar}>
      <div className="sidebar__wrapper">
        <img src={Logo} alt="logo" />
        {opened ? <h2>Administrator</h2> : null}
      </div>
      <div className="sidebar__list">
        {links.map((el) => (
          <div className="sidebar__list__item">
            <div className="items__icon">
              <i className={el.icon} />
            </div>
            {opened ? (
              <NavLink exact to={el.link} href={el.link} className="activeLink">
                {el.label}
              </NavLink>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
