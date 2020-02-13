import React from 'react';
import styled from '@emotion/styled';

import Cloudy from './icons/Party Cloudy Night-2x.png';
import CloudyDay from './icons/Party Cloudy Night-2x.png';
import CloudyNight from './icons/Party Cloudy Night-2x.png';
import ClearDay from './icons/Party Cloudy Night-2x.png';
import ClearNight from './icons/Party Cloudy Night-2x.png';
import Fog from './icons/Party Cloudy Night-2x.png';
import Hail from './icons/Party Cloudy Night-2x.png';
import Sleet from './icons/Party Cloudy Night-2x.png';
import Rain from './icons/Party Cloudy Night-2x.png';
import Snow from './icons/Party Cloudy Night-2x.png';
import Tornado from './icons/Party Cloudy Night-2x.png';
import Thunderstorm from './icons/Party Cloudy Night-2x.png';
import Wind from './icons/Party Cloudy Night-2x.png';
import Haze from './icons/Party Cloudy Night-2x.png';

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
