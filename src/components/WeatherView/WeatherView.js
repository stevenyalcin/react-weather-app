import React from 'react';
import WeatherEngine from '../WeatherEngine/WeatherEngine';

const WeatherView = props => {
  return (
    <div>
      {/* <div className="weatherInfoMessage">
        Hover the <b>Weather Card</b> to see more detailed weather condition
      </div> */}
      <div className="flex-container">
        <WeatherEngine location="moscow" />
        <WeatherEngine location="halifax" />
        <WeatherEngine location="Sydney" />
        <WeatherEngine location="london" />
        <WeatherEngine location="Tallinn" />
        <WeatherEngine location="manisa" />
        <WeatherEngine location="toronto" />
        <WeatherEngine location="vancouver" />
        <WeatherEngine location="cuba" />
        <WeatherEngine location="tbilisi" />
        <WeatherEngine location="Kyiv" />
        <WeatherEngine location="San Jose" />
      </div>
    </div>
  );
};

export default WeatherView;
