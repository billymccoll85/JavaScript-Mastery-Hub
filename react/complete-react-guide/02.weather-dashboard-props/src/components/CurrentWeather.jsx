import React, { useState, useEffect } from 'react';
import { fetchCurrentWeather } from './services/weatherService';

const CurrentWeatherDisplay = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCurrentWeather(51.5074, -0.1278); // Example coordinates for London
        setWeather(data.current);
      } catch (err) {
        setError('Failed to fetch current weather data');
        console.error(err);
      }
    };

    fetchData();
  }, []);

  if (error) return <p>{error}</p>;
  if (!weather) return <p>Loading...</p>;
  return (
    <div>
      <h1>Current Temperature: {weather.temp}°C</h1>
      <p>Conditions: {weather.weather[0].description}</p>
    </div>
  );
};

export default CurrentWeatherDisplay;
