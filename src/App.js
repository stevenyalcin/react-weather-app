import React from 'react';
import './App.css';
import styled from '@emotion/styled';
import WeatherEngine from './components/WeatherEngine';

function App() {
  const Engine = styled.div`
    margin: 0 auto;
    display: flex;
    color: white;
    flex-direction: row;
    justify-content: space-around;
  `;

  let newDate = new Date().toUTCString();
  // let date = newDate.getDate();
  // let month = newDate.getMonth() + 1;
  // let year = newDate.getFullYear();

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
          {newDate}
        </a>
      </div>

      <div className="row">
        <div className="side">
          <h2>About Me</h2>
          <h5>Photo of me:</h5>
          <div className="fakeimg" style={{ height: '200' }}>
            Image
          </div>
          <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
          <h3>More Text</h3>
          <p>Lorem ipsum dolor sit ame.</p>
          <div className="fakeimg" style={{ height: '60' }}>
            Image
          </div>
        </div>
        <div className="main">
          <h2>Weather Broadcast</h2>
          <span className="weatherInfoMessage">
            When you move the mouse over the <b>Weather Card</b>, you should be
            able to see more detaied information regarding to the weather
            condition of hovered city card.
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
        <h2>© Copyrights WeatherApp v1.0 Halifax NS 2020</h2>
      </div>
    </div>
  );
}

export default App;
