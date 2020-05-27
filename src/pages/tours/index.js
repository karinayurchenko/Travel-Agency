import React from 'react';
import './index.scss';
import Tour from '../../components/tour';

const details = [
  {
    label: 'Duration:',
    id: 1,
    days: '7 days',
    label2: 'Room Type',
    type: 'Standard Room',
    price: '872',
    url: 'https://r-cf.bstatic.com/xdata/images/hotel/270x200/231324425.webp?k=a84264a61c3f29f8390ad1f717fae5fa31cc2bb42a221607baac850de1153197&o=',
  },
];

const Tours = () => (
  <div className="tour">
    {details.map((el) => (
      <Tour
        key={el.id}
        data={el}
      />
    ))}
  </div>
);

export default Tours;
