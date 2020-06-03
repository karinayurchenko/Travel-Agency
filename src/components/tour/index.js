import React from 'react';
import './index.scss';

const Tour = ({ data }) => (
  <div className="tour__item"> 
    <div className="tour__img">
      <img src={data.url} alt="" />
    </div>
    <div className="tour__details">
      <div className="tour__title">{data.title}</div>
      <div className="tour__subtitle">{data.subtitle}</div>
      <div className="tour__duration">
        <div className="tour__label">{data.label}</div>
        <div className="tour__days">{data.days}</div>
      </div>
      <div className="tour__room-type">
        <div className="tour__label">{data.label2}</div>
        <div className="tour__type">{data.type}</div>
      </div>
    </div>
    <div className="tour__price">
      <div className="price">
        {data.price}
      </div>
      <div className="descr">per person</div>
      <button className="btn" type="button"> Details</button>
    </div>
  </div>
);

export default Tour; 
