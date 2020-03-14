import React from 'react';
import styled from '@emotion/styled';

const Condition = ({ temperature, conditionSummary }) => {
  // styling for the temperature and condition state of the current weather
  const Temperature = styled.h1`
    font-size: 1.7rem;
  `;

  const State = styled.h3`
    font-size: 1.2rem;
    /* text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
      1px 1px 0 #000; */
    text-shadow: black 1px 1px 1px;
    -webkit-font-smoothing: antialiased;
  `;

  return (
    <>
      <Temperature>{temperature} °C</Temperature>
      <State>{conditionSummary}</State>
    </>
  );
};

export default Condition;
