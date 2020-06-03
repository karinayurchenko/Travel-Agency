import React from 'react';
import './index.scss';

const Hotel = ({ data }) => (
  <div className="hotel__item">
    <div className="hotel__img">
      <img src={data.url} alt="" />
    </div>
    <div className="hotel__details">
      <div className="hotel__title">{data.title}</div>
      <div className="hotel__subtitle">{data.subtitle}</div>
      <div className="hotel__rating">
        <div className="rating__label">Rating:</div>
        <div className="rating__icons">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i class="far fa-star"></i>
        </div>
      </div>
    </div>
    <div className="hotel__about">
      <button className="btn" type="button"> View Details</button>
    </div>
  </div>
);

export default Hotel;
