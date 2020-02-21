import styled from '@emotion/styled';
import React from 'react';
import Clock from 'react-live-clock';
import './App.css';
import WeatherEngine from './components/WeatherEngine';

function App() {
  const Engine = styled.div`
    margin: 0 auto;
    display: flex;
    color: white;
    flex-direction: row;
    justify-content: space-around;
  `;

  let todayDate = new Date().toDateString();

  return (
    <div className="App">
      <div className="header">
        <h1>My Website</h1>
        <p>
          A <b>responsive</b> website created by me.
        </p>
      </div>

      <div className="navbar">
        <a href="#" className="active">
          Home
        </a>
        <a href="#">Link</a>
        <a href="#">Link</a>
        <a href="#" className="right">
          {todayDate} | <Clock format={'HH:mm:ss'} ticking={true} />
        </a>
      </div>

      <div className="row">
        <div className="side">
          <h2>About website</h2>
          <p>This website is designed and programmed in React js</p>
          <h3>Content</h3>
          <p>
            When you go over the website, you will be seen that different type
            of react libraries, and features is implemeted as a personal
            project.
          </p>
          <h3>Current features</h3>
          <ul>
            <li>Http Service</li>
            <li>Rss Service</li>
            <li>Twitter Api</li>
            <li>Weather Api</li>
            <li>News Api</li>
          </ul>
        </div>
        <div className="main">
          <h2>Weather Broadcast</h2>
          <span className="weatherInfoMessage">
            Please move mouse over the <b>Weather Card</b> to see more detailed
            weather condition of the city.
          </span>
          <div className="weatherBroadcast">
               
            <Engine>
                      
              <WeatherEngine location="kiev, ua" />
                      
              <WeatherEngine location="halifax, ca" />
                      
              <WeatherEngine location="london, gb" />
                      
              <WeatherEngine location="manisa, tr" />
                    
            </Engine>
          </div>

          <h2>Breaking News</h2>
          <h5>Title description, Sep 2, 2017</h5>
          <div className="feeds" style={{ height: '200' }}>
            Image
          </div>
          <p>Some text..</p>
          <p>
            Sunt in culpa qui officia deserunt mollit anim id est laborum
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco.
          </p>
        </div>
      </div>

      <div className="footer">
        <h2>© Copyrights SYALCIN Halifax NS 2020</h2>
      </div>
    </div>
  );
}

export default App;
