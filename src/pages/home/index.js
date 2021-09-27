import React from 'react';
import Directory from '../../components/directory';
import './styles.scss';

const HomePage = () => (
  <div className="home-wrapper">
    <h1>We're loaded! Browse our huge inventory!</h1>
    <Directory />
  </div>
);

export default HomePage;
