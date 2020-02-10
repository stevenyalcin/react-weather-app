import React from 'react';
import styled from '@emotion/styled';

const Icon = props => {
  const Image = styled.img`
    width: 30%;
  `;
  return <Image src="🌧" alt="Weather icon" />;
};

export default Icon;
