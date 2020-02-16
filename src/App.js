import React, { useState, useEffect } from 'react';
import './App.css';
import WeatherCard from './widgets/WeatherCard/WeatherCard';

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(true);
  // const [showLoading, setShowLoading] = useState(false);

  // set URL for the halifax NS area
  const halifaxURL =
    'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/ca936c348869cb4351c290fc43c349b5/44.647674,-63.608413';

  const fetchData = async () => {
    try {
      const res = await fetch(halifaxURL);
      const data = await res.json();
      setData(data);
      console.log(data);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    let loadingApiTimer = setTimeout(() => {
      fetchData();
      // setShowLoading({ isLoading: true });
      setError({ error: true });
    }, 1000);

    // this will clear Timeout when component unmont like in willComponentUnmount
    return () => window.clearTimeout(loadingApiTimer);
  }, []);
  //useEffect will run only one time
  //if you pass a value to array, like this [data] than clearTimeout will run every time this value changes (useEffect re-run)

  return (
    <div className="App">
      {error && (
        <div className="location">
          {Object.keys(data)
            .slice(0, 1)
            .map(index => {
              return (
                <div key={index}>
                  <WeatherCard
                    cityTimezone={data.timezone}
                    conditionIcon={data.currently.icon}
                    temperature={data.currently.temperature}
                    conditionSummary={data.currently.summary}
                  />
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
}

export default App;
