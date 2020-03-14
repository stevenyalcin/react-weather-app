import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import WeatherView from './components/WeatherView/WeatherView';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Navbar />
      <div className="row">
        {/* <Sidebar /> */}
        <div className="main">
          <WeatherView />
          {/* <News /> */}
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
