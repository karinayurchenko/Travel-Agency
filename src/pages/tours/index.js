import React from 'react';
import Tour from '../../components/tour';
import Details from '../../constants/tour';
import './index.scss';

const Tours = () => (
  <div className="tour">
    {Details.map((el) => (
      <Tour
        key={el.id}
        data={el}
      />
    ))}
  </div>
);

export default Tours;
