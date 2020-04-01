import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import WeatherView from './components/WeatherView/WeatherView';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="row">
        <div className="main">
          <WeatherView />
        </div>
      </div>
    </div>
  );
}

export default App;
