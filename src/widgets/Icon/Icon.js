import React from 'react';
import styled from '@emotion/styled';

const Image = styled.img`
  width: 30%;
`;

const Icon = () => {
  return (
    <Image
      className="icon"
      src="https://img.icons8.com/color/96/000000/cloud.png"
      alt="Weather icon"
    />
  );
};

export default Icon;
