import React from 'react';
import Card from '../../components/home/card';
import Portal from '../../components/home/portal';
import './index.scss';

const Home = () => (
  <div className="cards__container">
    <Card />
    <Card />
    <Card />
    <Portal />
  </div>
);

export default Home;
