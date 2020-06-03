import React from 'react';
import Hotel from '../../components/hotel';
import Details from '../../constants/hotel';
import './index.scss';

const Hotels = () => (
  <div className="hotel">
    <div className="hotel__btn">
      <button className="add__btn" type="button"> Add new hotel</button>
      <form className="find__hotel">
        <i className=" icon fas fa-search" />
        <input placeholder="Find hotel" />
      </form>
    </div>
    {Details.map((el) => (
      <Hotel
        key={el.id}
        data={el}
      />
    ))}
  </div>
);

export default Hotels;
