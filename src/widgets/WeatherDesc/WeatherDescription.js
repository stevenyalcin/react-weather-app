import React from 'react';
import styled from '@emotion/styled';

const WeatherDescription = ({ weatherDescription }) => {
  // styling for the WeatherDescription of the current weather
  const WeatherDescription = styled.h1`
    font-size: 1em;
  `;

  return (
    <>
      <WeatherDescription>{weatherDescription}</WeatherDescription>
    </>
  );
};

export default WeatherDescription;
