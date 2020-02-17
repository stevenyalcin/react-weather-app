import React from 'react';
import styled from '@emotion/styled';

const Location = ({ cityTimezone, country }) => {
  // set styled library for the components by wrapping them by using div
  const LocationName = styled.div`
    text-align: center;
  `;
  const City = styled.h1`
    font-size: 1.7em;
  `;
  const Country = styled.h3`
    font-size: 1.1rem;
  `;

  return (
    <LocationName>
      <City>{cityTimezone}</City>
      <Country>{country}</Country>
    </LocationName>
  );
};

export default Location;
