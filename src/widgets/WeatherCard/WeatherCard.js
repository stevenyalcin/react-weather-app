import React from 'react';
import styled from '@emotion/styled';
import Location from '../Location/Location';
import Icon from '../Icon/Icon';
import Condition from '../Condition/Condition';
import WeatherDescription from '../WeatherDesc/WeatherDescription';

const WeatherCard = ({
  cityTimezone,
  country,
  temperature,
  conditionSummary,
  weatherDescription
}) => {
  // set mutable variables for the up and down color for the temperature
  let highColor = 0;
  let lowColor = 0;
  let bg = null;

  // set the calculation based on the current temperature that we are receiving for particular location
  if (temperature >= 1) {
    highColor = (1 - (temperature - 5) / 28) * 255;
    lowColor = highColor - 150;
    bg = `linear-gradient(to top,
    rgb(255, ${highColor}, 0),
    rgb(255, ${lowColor}, 0))`;
  } else if (temperature <= 10) {
    highColor = (1 - (temperature + 1) / 32) * 255;
    lowColor = highColor - 150;
    bg = `linear-gradient(to top,
      rgb(0, ${highColor}, 255),
      rgb(0, ${lowColor}, 255))`;
  }

  // set hoc styled library for the card component that includes all inner components
  const Card = styled.div`
    font-family: 'Merriweather', sans-serif;
    margin: 1.5em;
    margin-bottom: 1em;
    background: ${bg};
    width: 16em;
    height: 22em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-radius: 10%;
  `;

  return (
    <div className="weatherCardView">
      <Card>
        <Location cityTimezone={cityTimezone} country={country} />
        <Icon conditionSummary={conditionSummary} />
        <Condition
          temperature={temperature}
          conditionSummary={conditionSummary}
        />
        <div className="weatherDesc">
          <WeatherDescription weatherDescription={weatherDescription} />
        </div>
      </Card>
    </div>
  );
};

export default WeatherCard;
