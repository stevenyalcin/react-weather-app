import React, { useState, useEffect } from 'react';
import WeatherCard from '../widgets/WeatherCard/WeatherCard';

const WeatherEngine = ({ location }) => {
  // init for our state variable
  const [error, setError] = useState(true);
  // const [showLoading, setShowLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({
    city: null,
    country: null,
    temp: null,
    condition: null
  });

  // set fetching data for the function
  const getWeatherData = async q => {
    try {
      const res = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${q}&units=metric&APPID=14257370885b8c8a7489f98046166a76`
      );
      const resJSON = await res.json();
      setWeather({
        city: resJSON.name,
        country: resJSON.sys.country,
        temp: resJSON.main.temp,
        condition: resJSON.weather[0].main
      });
    } catch (error) {
      setError(error);
    }
  };

  const handleSearch = e => {
    e.preventDefault();
    getWeatherData(query);
  };

  useEffect(() => {
    getWeatherData(location);
    // let loadingApiTimer = setTimeout(() => {
    //   setShowLoading({ isLoading: true });
    //   setError({ error: true });
    // }, 1000);

    // this will clear Timeout when component unmont like in willComponentUnmount
    // return () => window.clearTimeout(loadingApiTimer);
  }, [location]);
  //useEffect will run only one time
  //if you pass a value to array, like this [data] than clearTimeout will run every time this value changes (useEffect re-run)

  return (
    <div>
      {error && (
        <div className="weatherCard">
          <WeatherCard
            cityTimezone={weather.city}
            country={weather.country}
            temperature={weather.temp}
            conditionSummary={weather.condition}
          />
          <form>
            <input value={query} onChange={e => setQuery(e.target.value)} />
            <button onClick={e => handleSearch(e)}>Search</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default WeatherEngine;
