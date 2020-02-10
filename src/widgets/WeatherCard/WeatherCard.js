import React from 'react';
import styled from '@emotion/styled';
import Location from '../Location/Location';
import Icon from '../Icon/Icon';
import Condition from '../Condition/Condition';

const WeatherCard = ({ temp }) => {
  let highColor = 0;
  let lowColor = 0;
  let bg = null;

  if (temp > 12) {
    highColor = (1 - (temp - 12) / 28) * 255;
    lowColor = highColor - 150;
    bg = `linear-gradient(to top,
    rgb(255, ${highColor}, 0),
    rgb(255, ${lowColor}, 0))`;
  } else if (temp <= 12) {
    highColor = (1 - (temp + 20) / 32) * 255;
    lowColor = highColor - 150;
    bg = `linear-gradient(to top,
      rgb(0, ${highColor}, 255),
      rgb(0, ${lowColor}, 255))`;
  }

  const Card = styled.div`
    font-family: 'Merriweather', sans-serif;
    margin: 0 auto;
    background: ${bg};
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
      <Icon />
      <Condition />
    </Card>
  );
};

export default WeatherCard;
