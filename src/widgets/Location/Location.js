import React from 'react';
import styled from '@emotion/styled';

const Location = props => {
  const Location = styled.div`
    text-align: center;
  `;
  const City = styled.h1`
    font-size: 1.7em;
  `;
  const Country = styled.h3`
    font-size: 1.1rem;
  `;

  return (
    <Location>
      <City>Sydney</City>
      <Country>AU</Country>
    </Location>
  );
};

export default Location;
