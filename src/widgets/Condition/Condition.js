import React from 'react';
import styled from '@emotion/styled';

const Condition = ({ temp, condition }) => {
  const Temperature = styled.h1`
    font-size: 1.7rem;
  `;

  const State = styled.h3`
    font-size: 1.7rem;
  `;

  return (
    <>
      <Temperature>{temp} ℃</Temperature>
      <State>{condition}</State>
    </>
  );
};

export default Condition;
