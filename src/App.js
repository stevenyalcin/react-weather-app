import React from 'react';
import './App.css';
import WeatherCard from './widgets/WeatherCard/WeatherCard';

function App() {
  return (
    <div className="App">
      <WeatherCard
        city={'Halifax'}
        country={'CA'}
        temp={-10}
        condition={'Snowing'}
      />
    </div>
  );
}

export default App;
