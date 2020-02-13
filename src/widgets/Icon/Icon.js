import React from 'react';
import styled from '@emotion/styled';

const Icon = ({ conditionIcon }) => {
  const Image = styled.img`
    width: 30%;
  `;

  // set the switch statement according to the current condition icon
  var conditionIconImg = '';
  switch (conditionIcon) {
    case 'partly-cloudy-night':
      conditionIconImg = './icons/Heavy Rain-2x.png';
      break;
    default:
      break;
  }

  return <Image src={conditionIconImg} alt="Weather icon" />;
};

export default Icon;
