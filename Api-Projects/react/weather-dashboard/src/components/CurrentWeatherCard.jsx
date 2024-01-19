import React, { useState, useEffect } from "react";
import { getCurrentWeather } from "../api/WeatherService";
import { useCity } from '../context/CityContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThermometerHalf, faCloud } from '@fortawesome/free-solid-svg-icons';

const CurrentWeatherCard = () => {
  const { city } = useCity();
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [currentDateTime, setCurrentDateTime] = useState('');

  useEffect(() => {
    getCurrentWeather(city.lat, city.lon)
      .then((data) => {
        setWeatherData(data);
        setError(null);
      })
      .catch((err) => setError(err.message));

    const interval = setInterval(() => {
      const now = new Date();
      const formattedDateTime = now.toLocaleString('en-GB', {
        month: 'short', 
        day: 'numeric', 
        hour: 'numeric', 
        minute: '2-digit', 
        hour24: true 
      });
      setCurrentDateTime(formattedDateTime);
    }, 1000);

    return () => clearInterval(interval);
  }, [city]);

  if (error) {
    return <div className="text-red-600 text-center font-bold mb-4">{error}</div>;
  }

  if (!weatherData) {
    return <div className="text-gray-500 text-center">Loading...</div>;
  }

  const { temp, feels_like, humidity, wind_speed, weather, pressure, clouds, uvi, visibility, wind_deg } = weatherData;

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const iconUrl = `http://openweathermap.org/img/wn/${weather[0].icon}.png`;

  return (
    <div className="bg-sky-200 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ease-in-out">
      <div className="p-4">
        <div className="text-center font-semibold">
          {currentDateTime} {/* Display current date and time */}
        </div>
        <h2 className="text-xl font-bold text-center mb-2">Weather in {city.name}</h2>
        <div className="flex justify-start items-center">
          <img src={iconUrl} alt="Weather icon" />
          <p className="text-4xl font-semibold">{Math.round(temp)}°C</p>
        </div>
        <div className="flex my-2 font-bold">
          <p className="text-md mr-4">
            <FontAwesomeIcon icon={faThermometerHalf} /> Feels like: {Math.round(feels_like)}°C 
          </p>
          <p className="text-md">
            <FontAwesomeIcon icon={faCloud} /> {capitalizeFirstLetter(weather[0].description)}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 text-center">
          <div>Humidity: {humidity}%</div>
          <div>Pressure: {pressure} hPa</div>
          <div>Cloudiness: {clouds}%</div>
          <div>UV Index: {uvi}</div>
          <div>Visibility: {visibility / 1000} km</div>
          <div>Wind Speed: {Math.round(wind_speed)} mph</div>
          <div>Wind Direction: {wind_deg}°</div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeatherCard;
