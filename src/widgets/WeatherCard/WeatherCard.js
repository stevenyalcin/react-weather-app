import React from 'react';

const WeatherCard = props => {
  return (
    <div className="card">
      <div className="location">
        <h1 className="city">Sydney</h1>
        <h3 className="country">AU</h3>
      </div>
      <img
        className="icon"
        src="https://img.icons8.com/color/96/000000/clouds.png"
        alt="Weather icon"
      />
      <h1 className="temperature">23 ℃</h1>
      <h3 className="condition">Cloudy</h3>
    </div>
  );
};

export default WeatherCard;
