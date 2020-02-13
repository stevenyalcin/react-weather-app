import React from 'react';
import styled from '@emotion/styled';

const Condition = ({ temperature, conditionSummary }) => {
  const Temperature = styled.h1`
    font-size: 1.7rem;
  `;

  const State = styled.h3`
    font-size: 1.7rem;
  `;

  return (
    <>
      <Temperature>{temperature} °F</Temperature>
      <State>{conditionSummary}</State>
    </>
  );
};

export default Condition;
