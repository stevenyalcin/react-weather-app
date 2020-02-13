import styled from '@emotion/styled';
import React from 'react';
import {
  default as ClearDay,
  default as ClearNight,
  default as Cloudy,
  default as CloudyDay,
  default as CloudyNight,
  default as Fog,
  default as Hail,
  default as Haze,
  default as Rain,
  default as Sleet,
  default as Snow,
  default as Thunderstorm,
  default as Tornado,
  default as Wind
} from './icons/Party Cloudy Night-2x.png';

const Icon = ({ conditionIcon }) => {
  const Image = styled.img`
    width: 30%;
  `;

  // set the switch statement according to the current condition icon
  var icon = '';
  switch (conditionIcon) {
    case 'partly-cloudy-day':
      icon = CloudyDay;
      break;
    case 'partly-cloudy-night':
      icon = CloudyNight;
      break;
    case 'cloudy':
      icon = Cloudy;
      break;
    case 'clear-day':
      icon = ClearDay;
      break;
    case 'clear-night':
      icon = ClearNight;
      break;
    case 'fog':
      icon = Fog;
      break;
    case 'tornado':
      icon = Tornado;
      break;
    case 'snow':
      icon = Snow;
      break;
    case 'rain':
      icon = Rain;
      break;
    case 'sleet':
      icon = Sleet;
      break;
    case 'hail':
      icon = Hail;
      break;
    case 'wind':
      icon = Wind;
      break;
    case 'thunderstorm':
      icon = Thunderstorm;
      break;
    default:
      icon = Haze;
      break;
  }

  return <Image src={icon} alt="Weather icon" />;
};

export default Icon;
