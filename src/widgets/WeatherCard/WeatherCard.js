import React from 'react';
import styled from '@emotion/styled';
import Location from '../Location/Location';

const WeatherCard = props => {
  const cloud = 100;

  const Card = styled.div`
    font-family: 'Merriweather', sans-serif;
    margin: 0 auto;
    background: linear-gradient(to bottom, rgb(${cloud}, 200, 200), lightblue);
    width: 15em;
    height: 20em;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 15px;
  `;

  return (
    <Card>
      <Location />
      <img
        className="icon"
        src="https://img.icons8.com/color/96/000000/cloud.png"
        alt="Weather icon"
      />
      <h1 className="temperature">23 ℃</h1>
      <h3 className="condition">Cloudy</h3>
    </Card>
  );
};

export default WeatherCard;
