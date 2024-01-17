import React, { useState, useEffect } from "react";
import getCurrentWeather from "../api/WeatherService"; // Ensure this is correctly importing your API call function

const CurrentWeatherCard = () => {
  const [lat, lon] = [51.5074, -0.1278]; // Coordinates for London, UK
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getCurrentWeather(lat, lon)
      .then((data) => {
        setWeatherData(data);
        setError(null);
      })
      .catch((err) => setError(err.message));
  }, [lat, lon]);

  if (error) {
    return <div className="text-red-600 text-center font-bold mb-4">{error}</div>;
  }

  if (!weatherData) {
    return <div className="text-gray-500 text-center">Loading...</div>;
  }

  // Destructuring for easier access to the data
  const { temp, feels_like, humidity, wind_speed, weather, pressure, clouds, uvi, visibility, wind_deg } = weatherData;

  // Constructing the URL for the weather icon
  const iconUrl = `http://openweathermap.org/img/wn/${weather[0].icon}.png`;

  return (
    <div className="max-w-lg mt-12 mx-auto bg-sky-200 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ease-in-out">
      <div className="p-4">
        <h2 className="text-xl font-bold text-center mb-2">Weather in London</h2>
        <div className="flex justify-center items-center">
          <img src={iconUrl} alt="Weather icon" className="mr-3" />
          <p className="text-4xl font-semibold">{Math.round(temp)}°C</p>
        </div>
        <div className="text-center my-2">
          <p className="text-lg">{weather[0].description}</p>
        </div>
        <div className="grid grid-cols-2 gap-4 text-center">
          <div>Feels like: {Math.round(feels_like)}°C</div>
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
