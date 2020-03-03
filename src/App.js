import React from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import WeatherView from './components/WeatherView/WeatherView';
import News from './widgets/News/News';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Navbar /> */}
      <div className="row">
        <Sidebar />
        <div className="main">
          <WeatherView />
          <News />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
