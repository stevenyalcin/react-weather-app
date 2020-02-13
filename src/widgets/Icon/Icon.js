import React from 'react';
import styled from '@emotion/styled';

const Icon = ({ icone }) => {
  const Image = styled.img`
    width: 30%;
  `;

  // The switch statement
  var iconImg = '';
  switch (icone) {
    case 'partly-cloudy-night':
      iconImg = './Tornado-2x.png';
      break;
    default:
      break;
  }

  return <Image src={iconImg} alt="Weather icon" />;
};

export default Icon;
