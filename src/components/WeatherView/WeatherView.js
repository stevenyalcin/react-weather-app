import styled from '@emotion/styled';
import React from 'react';
import WeatherEngine from '../WeatherEngine/WeatherEngine';

const WeatherView = props => {
  const Engine = styled.div`
    margin: 0 auto;
    display: flex;
    color: white;
    flex-direction: row;
    justify-content: space-around;
  `;

  return (
    <div>
      <div style={{ marginBottom: '2em' }}>
        <h2>Weather Broadcast</h2>
        <span className="weatherInfoMessage">
          Please move mouse over the <b>Weather Card</b> to see more detailed
          weather condition of the city.
        </span>
      </div>
      <div>
        <Engine>
                 
          <WeatherEngine location="kiev, ua" />
                  
          <WeatherEngine location="halifax, ca" />
                  
          <WeatherEngine location="london, gb" />
                  
          <WeatherEngine location="manisa, tr" />
                
        </Engine>
      </div>
    </div>
  );
};

export default WeatherView;
