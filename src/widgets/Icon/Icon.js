import styled from '@emotion/styled';
import React from 'react';
import Wind from './icons/Breezy-2x.png';
import Fog from './icons/Fog-2x.png';
import Mist from './icons/Fog-2x.png';
import Hail from './icons/Hail-2x.png';
import Cloudy from './icons/Mostly Cloudy-2x.png';
import Sunny from './icons/Mostly Sunny-2x.png';
import ClearDay from './icons/Party Cloudy-2x.png';
import Rain from './icons/Rain-2x.png';
import Sleet from './icons/Sleet-2x.png';
import Snow from './icons/Snow-2x.png';
import Thunderstorm from './icons/Thunderstorm-2x.png';
import Tornado from './icons/Tornado-2x.png';
import Drizzle from './icons/Drizzle-2x.png';
import Dust from './icons/Dust-2x.png';
import Smoke from './icons/Smoke-2x.png';

const Icon = ({ conditionSummary }) => {
  const Image = styled.img`
    width: 30%;
  `;

  // set the switch statement according to the current condition icon
  var icon = '';
  switch (conditionSummary) {
    case 'Clouds':
      icon = Cloudy;
      break;
    case 'Clear':
      icon = ClearDay;
      break;
    case 'Drizzle':
      icon = Drizzle;
      break;
    case 'Dust':
      icon = Dust;
      break;
    case 'Fog':
      icon = Fog;
      break;
    case 'Mist':
      icon = Mist;
      break;
    case 'Tornado':
      icon = Tornado;
      break;
    case 'Snow':
      icon = Snow;
      break;
    case 'Rain':
      icon = Rain;
      break;
    case 'Sleet':
      icon = Sleet;
      break;
    case 'Smoke':
      icon = Smoke;
      break;
    case 'Sunny':
      icon = Sunny;
      break;
    case 'Hail':
      icon = Hail;
      break;
    case 'Wind':
      icon = Wind;
      break;
    case 'Thunderstorm':
      icon = Thunderstorm;
      break;
    default:
      icon = Sunny;
      break;
  }

  return <Image src={icon} alt="Weather icon" />;
};

export default Icon;
