import styled from '@emotion/styled';
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
      <div class="flex-container">
        <WeatherEngine location="kiev, ua" />
        <WeatherEngine location="halifax, ca" />
        <WeatherEngine location="london, gb" />
        <WeatherEngine location="manisa, tr" />
        <WeatherEngine location="toronto, ca" />
        <WeatherEngine location="Ottawa, ca" />
        <WeatherEngine location="new york, us" />
        <WeatherEngine location="seattle, us" />
        <WeatherEngine location="seattle, us" />
        <WeatherEngine location="seattle, us" />
        <WeatherEngine location="seattle, us" />
        <WeatherEngine location="seattle, us" />
        <WeatherEngine location="seattle, us" />
        <WeatherEngine location="seattle, us" />
      </div>
    </div>
  );
};

export default WeatherView;
