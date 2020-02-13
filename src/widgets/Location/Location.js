import React from 'react';
import styled from '@emotion/styled';

const Location = ({ city, icon }) => {
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
      <City>{city}</City>
      <Country>{icon}</Country>
    </LocationName>
  );
};

export default Location;
