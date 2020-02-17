import React from 'react';
import './App.css';
import styled from '@emotion/styled';
import WeatherEngine from './components/WeatherEngine';

function App() {
  const Engine = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  `;
  return (
    <div className="App">
      <Engine>
        <WeatherEngine location="kiev, ua" />
        <WeatherEngine location="sydney, au" />
        <WeatherEngine location="london, gb" />
        <WeatherEngine location="halifax, ca" />
        <WeatherEngine location="new york, us" />
        <WeatherEngine location="manisa, tr" />
        <WeatherEngine location="medina, sa" />
      </Engine>
    </div>
  );
}

export default App;
