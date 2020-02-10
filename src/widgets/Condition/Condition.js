import React from 'react';
import styled from '@emotion/styled';

const Condition = () => {
  const Temperature = styled.h1`
    font-size: 1.7rem;
  `;

  const State = styled.h3`
    font-size: 1.7rem;
  `;

  return (
    <>
      <Temperature>23 ℃</Temperature>
      <State>Cloudy</State>
    </>
  );
};

export default Condition;
