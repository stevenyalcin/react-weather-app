import React from 'react';
import styled from '@emotion/styled';
import Location from '../Location/Location';
import Icon from '../Icon/Icon';
import Condition from '../Condition/Condition';

const WeatherCard = ({
  cityTimezone,
  conditionIcon,
  temperature,
  conditionSummary
}) => {
  // set mutable variables for the up and down color for the temperature
  let highColor = 0;
  let lowColor = 0;
  let bg = null;

  // set the calculation based on the current temperature that we are receiving for particular location
  if (temperature > 12) {
    highColor = (1 - (temperature - 12) / 28) * 255;
    lowColor = highColor - 150;
    bg = `linear-gradient(to top,
    rgb(255, ${highColor}, 0),
    rgb(255, ${lowColor}, 0))`;
  } else if (temperature <= 12) {
    highColor = (1 - (temperature + 20) / 32) * 255;
    lowColor = highColor - 150;
    bg = `linear-gradient(to top,
      rgb(0, ${highColor}, 255),
      rgb(0, ${lowColor}, 255))`;
  }

  // set hoc styled library for the card component that includes all inner components
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
      <Location cityTimezone={cityTimezone} />
      <Icon conditionIcon={conditionIcon} />
      <Condition
        temperature={temperature}
        conditionSummary={conditionSummary}
      />
    </Card>
  );
};

export default WeatherCard;
