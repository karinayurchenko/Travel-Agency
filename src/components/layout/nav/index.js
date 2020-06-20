import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Portal from '../portal';
import { toggleSidebar } from '../../../store/actions/general';
import './index.scss';


const Nav = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const modifySidebar = () => {
    dispatch(toggleSidebar());
  };

  return (
    <div className="nav">
      <div className="nav__inner">
        <div className="leftBlock">
          <div className="leftBlock__icon" onClick={modifySidebar}>
            <i className="fas fa-bars " />
          </div>
        </div>
        <div className="rightBlock">
          <div className="rightBlock__icons">
            <i className="far fa-envelope" />
          </div>
          <div className="users__block" onClick={() => setOpen(!open)}>
            <div className="rightBlock__avatar">
              <img src="https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png" alt="avatar" />
            </div>
            <div className="rightBlock__username"> Jonh Doe</div>
          </div>
          {open ? <div className="portalBlock"><Portal /></div> : null}
        </div> 
      </div>
    </div>

  );
};

export default Nav;
