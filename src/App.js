import React from 'react';
import './App.css';
import WeatherCard from './widgets/WeatherCard/WeatherCard';

function App() {
  return (
    <div className="App">
      <WeatherCard
        city={'Sydney'}
        country={'AU'}
        temp={10}
        condition={'Clear'}
      />
    </div>
  );
}

export default App;
