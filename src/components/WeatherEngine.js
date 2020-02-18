import React, { useState, useEffect } from 'react';
import WeatherCard from '../widgets/WeatherCard/WeatherCard';

// WeatherEngine component is the Main component of the weather cards functionality
const WeatherEngine = ({ location }) => {
  // init for our state variable
  // const [showLoading, setShowLoading] = useState(false);
  const [error, setError] = useState(true);
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({
    city: null,
    country: null,
    temp: null,
    condition: null
  });

  // set async fetching function for the selected `cityName`
  const getWeatherData = async cityName => {
    try {
      const res = await fetch(
        // fetch the data related to the specify `cityName` from the Open Weather Api
        `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=14257370885b8c8a7489f98046166a76`
      );
      const resJSON = await res.json();
      // set the existing weather variables that we need to show in the UI
      setWeather({
        city: resJSON.name,
        country: resJSON.sys.country,
        temp: resJSON.main.temp,
        condition: resJSON.weather[0].main
      });
    } catch (error) {
      console.log(`Error is occured => ${error}`);
      setError(error); // set an error message for the user
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
        <div>
          <WeatherCard
            cityTimezone={weather.city} // set the city name on the card
            country={weather.country} // set the country name on the card
            temperature={weather.temp} // set the temperature name on the card
            conditionSummary={weather.condition} // set the weather condition summary
          />
          {/* <form>
            <input value={query} onChange={e => setQuery(e.target.value)} />
            <button onClick={e => handleSearch(e)}>Search</button>
          </form> */}
        </div>
      )}
    </div>
  );
};

export default WeatherEngine;
