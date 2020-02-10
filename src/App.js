import React from 'react';
import './App.css';
import WeatherCard from './widgets/WeatherCard/WeatherCard';

function App() {
  return (
    <div className="App">
      <WeatherCard temp="10" />
      <WeatherCard temp="15" />
      <WeatherCard temp="20" />
    </div>
  );
}

export default App;
