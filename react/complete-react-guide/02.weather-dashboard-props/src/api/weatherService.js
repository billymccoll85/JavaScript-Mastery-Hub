import React, { useState, useEffect } from 'react';
import { fetchCurrentWeather } from './api/weatherService';

function CurrentWeather({ lat, lon }) {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadData() {
      try {
        const data = await fetchCurrentWeather(lat, lon);
        setWeather(data.current);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    }

    loadData();
  }, [lat, lon]);

  if (loading) return <p>Loading current weather...</p>;
  if (error) return <p>Error loading weather: {error}</p>;
  return (
    <div>
      <h2>Current Weather</h2>
      {weather && (
        <>
          <p>Temperature: {weather.temp}°C</p>
          <p>Conditions: {weather.weather[0].description}</p>
        </>
      )}
    </div>
  );
}

export default CurrentWeather;
