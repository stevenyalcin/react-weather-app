import React from 'react';

const WeatherCard = props => {
  return (
    <div className="card">
      <h1 className="city">Sydney</h1>
      <h3 className="country">AU</h3>
      <img className="icon" src="" alt="Weather icon" />
      <h1 className="temparature">23 ℃</h1>
      <h3 className="condition">RAINY</h3>
    </div>
  );
};

export default WeatherCard;
