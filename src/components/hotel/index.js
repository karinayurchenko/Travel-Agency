import React from 'react';
import './index.scss';

const Hotel = ({ data }) => (
  <div className="hotel__item">
    <div className="hotel__img">
      <img src={data.mainImg} alt="" />
    </div>
    <div className="hotel__details">
      <div className="hotel__title">{data.name}</div>
      <div className="hotel__subtitle">{data.description}</div>
      <div className="hotel__rating">
        <div className="rating__label">Rating:</div>
        <div className="rating__icons">
          {Array.from({ length: 5 }).map((el, index) => <i className={`${index >= data.averageRating ? 'far' : 'fas'} fa-star`} />)}
        </div>
      </div>
    </div>
    <div className="hotel__about">
      <button className="btn" type="button"> View Details</button>
    </div>
  </div>
);

export default Hotel;
