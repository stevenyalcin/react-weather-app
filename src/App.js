import React from 'react';
import './App.css';
import WeatherEngine from './components/WeatherEngine';

function App() {
  return (
    <div className="App">
      <WeatherEngine location="sydney, au" />
      <WeatherEngine location="london, gb" />
    </div>
  );
}

export default App;
