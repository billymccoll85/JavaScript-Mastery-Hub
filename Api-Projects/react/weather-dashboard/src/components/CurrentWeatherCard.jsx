import React, { useState, useEffect } from "react";
import { getCurrentWeather } from "../api/WeatherService";
import { useCity } from '../context/CityContext'; // Import useCity hook
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThermometerHalf, faCloud } from '@fortawesome/free-solid-svg-icons';

const CurrentWeatherCard = () => {
  const { city } = useCity(); // Use the city from context
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getCurrentWeather(city.lat, city.lon) // Use city coordinates from context
      .then((data) => {
        setWeatherData(data);
        setError(null);
      })
      .catch((err) => setError(err.message));
  }, [city]); // Rerun the effect when city changes

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
        <h2 className="text-xl font-bold mb-2">Weather in {city.name}</h2> {/* Display the selected city name */}
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
