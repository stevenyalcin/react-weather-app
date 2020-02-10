import React from 'react';
import styled from '@emotion/styled';
import Location from '../Location/Location';
import Icon from '../Icon/Icon';
import Condition from '../Condition/Condition';

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
      <Icon />
      <Condition />
    </Card>
  );
};

export default WeatherCard;
