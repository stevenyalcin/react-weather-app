import React from 'react';
import './App.css';
import WeatherCard from './widgets/WeatherCard/WeatherCard';

function App() {
  return (
    <div className="App">
      <WeatherCard temp={-20} />
      <WeatherCard temp={0} />
      <WeatherCard temp={16} />
    </div>
  );
}

export default App;
