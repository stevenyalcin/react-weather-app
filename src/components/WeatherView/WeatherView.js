import React from 'react';
import WeatherEngine from '../WeatherEngine/WeatherEngine';

const WeatherView = props => {
  return (
    <div>
      <div style={{ marginBottom: '2em' }}>
        <h2>Weather Broadcast</h2>
        <span className="weatherInfoMessage">
          Please move mouse over the <b>Weather Card</b> to see more detailed
          weather condition of the city.
        </span>
      </div>
      <div className="flex-container">
        <WeatherEngine location="moscow" />
        <WeatherEngine location="halifax" />
        <WeatherEngine location="london" />
        <WeatherEngine location="manisa" />
        <WeatherEngine location="toronto" />
        <WeatherEngine location="vancouver" />
        <WeatherEngine location="cuba" />
        <WeatherEngine location="tbilisi" />
      </div>
    </div>
  );
};

export default WeatherView;
