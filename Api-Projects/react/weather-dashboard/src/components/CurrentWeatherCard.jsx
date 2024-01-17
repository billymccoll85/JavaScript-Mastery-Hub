import React, { useState, useEffect } from "react";
import { fetchCurrentWeather } from "../api/WeatherService";

const WeatherCard = ({ lat, lon }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (lat && lon) {
      fetchCurrentWeather(lat, lon)
        .then((data) => {
          setWeatherData(data.current); // Access the current weather data
          setError(null);
        })
        .catch((err) => setError(err.message));
    } else {
      setError(null);
      setWeatherData(null);
    }
  }, [lat, lon]);

  const roundedTemp = weatherData?.temp && Math.round(weatherData.temp);
  const feelsLike = weatherData?.feels_like && Math.round(weatherData.feels_like);
  const humidity = weatherData?.humidity;
  const windSpeed = weatherData?.wind_speed && Math.round(weatherData.wind_speed);
  const weatherDescription = weatherData?.weather[0].description;
  const iconCode = weatherData?.weather[0].icon;
  const iconUrl = iconCode ? `http://openweathermap.org/img/wn/${iconCode}.png` : '';

  return (
    <div className="max-w-lg mt-12 mx-auto bg-sky-200 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ease-in-out">
      <div className="p-4">
        {error && (
          <div className="text-red-600 text-center font-bold mb-4">
            Error: {error}
          </div>
        )}
        {weatherData ? (
          <>
            <h2 className="text-xl font-bold text-center mb-2">
              Current Weather
            </h2>
            <div className="flex justify-center items-center">
              {iconUrl && <img src={iconUrl} alt="Weather icon" className="w-20 h-20" />}
              <p className="text-4xl font-semibold ml-2">{roundedTemp}°C</p>
            </div>
            <p className="text-md text-center">Feels like: {feelsLike}°C</p>
            <p className="text-md text-center">Humidity: {humidity}%</p>
            <p className="text-md text-center">Wind Speed: {windSpeed} m/s</p>
            <p className="text-md text-center">{weatherDescription}</p>
          </>
        ) : (
          <div className="text-gray-500 text-center">Loading...</div>
        )}
      </div>
    </div>
  );
};

export default WeatherCard;
