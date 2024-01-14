import React, { useState, useEffect } from 'react';
import { fetchCurrentWeather } from '../api/WeatherService';

const WeatherCard = ({ city }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCurrentWeather(city)
      .then(data => {
        setWeatherData(data);
        setError(null);
      })
      .catch(err => setError(err.message));
  }, [city]);

  if (error) {
    return (
      <div className="text-red-600 text-center font-bold p-4">
        Error: {error}
      </div>
    );
  }

  if (!weatherData) {
    return (
      <div className="text-gray-500 text-center p-4">
        Loading...
      </div>
    );
  }

  const roundedTemp = Math.round(weatherData.main.temp);
  const feelsLike = Math.round(weatherData.main.feels_like);
  const humidity = weatherData.main.humidity;

  return (
    <div className="max-w-sm mx-auto my-4 bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ease-in-out">
      <h2 className="text-xl font-bold text-center mb-2">{weatherData.name}</h2>
      <p className="text-3xl font-semibold text-center">{roundedTemp}°C</p>
      <p className="text-md text-center">Feels like: {feelsLike}°C</p>
      <p className="text-md text-center">Humidity: {humidity}%</p>
    </div>
  );
};

export default WeatherCard;
