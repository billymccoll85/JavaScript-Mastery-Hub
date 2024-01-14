import React, { useState, useEffect } from 'react';
import { fetchCurrentWeather } from '../api/WeatherService';

const WeatherCard = ({ city }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCurrentWeather(city)
      .then(data => setWeatherData(data))
      .catch(err => setError(err.message));
  }, [city]);

  if (error) return <div>Error: {error}</div>;
  if (!weatherData) return <div>Loading...</div>;

  return (
    <div className="card bg-blue-200 p-4">
      <h2 className="text-xl font-bold">{weatherData.name}</h2>
      <p>{weatherData.main.temp}°C</p>
    </div>
  );
};

export default WeatherCard;
