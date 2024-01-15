// In this `WeatherCard` component:

// 1. **useState** is used to create `weatherData` and `error` state variables. `weatherData` stores the weather information fetched from the API, and `error` stores any error messages if the API request fails.

// 2. **useEffect** is used to perform the side effect of fetching weather data. When the `city` prop changes, the effect will run again, fetching new weather data for the updated city. Inside this hook:
//    - `fetchCurrentWeather(city)` is called to fetch the weather data.
//    - If successful, `setWeatherData` updates the `weatherData` state with the fetched data, and `setError(null)` clears any previous errors.
//    - If there's an error, `setError(err.message)` updates the `error` state with the error message.

// 3. The component conditionally renders:
//    - An error message if there is an error.
//    - A loading message if the weather data is not yet available.
//    - The weather card with the current weather data, including temperature, "feels like" temperature, and humidity, if the data is available.

// The use of `useState` and `useEffect` here allows for a clean and efficient way to manage state and side effects in the `WeatherCard` component, providing a dynamic and responsive user experience.

import React, { useState, useEffect } from "react";
import { fetchCurrentWeather } from "../api/WeatherService";

const WeatherCard = () => {
  const [city, setCity] = useState("London");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (city.length > 0) {
      fetchCurrentWeather(city)
        .then((data) => {
          setWeatherData(data);
          setError(null);
        })
        .catch((err) => setError(err.message));
    } else {
      setError(null);
      setWeatherData(null);
    }
  }, [city]);

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  //going to refactor this later
  const roundedTemp = weatherData?.main.temp && Math.round(weatherData.main.temp);
  const feelsLike = weatherData?.main.feels_like && Math.round(weatherData.main.feels_like);
  const humidity = weatherData?.main.humidity;
  const windSpeed = weatherData?.wind.speed && Math.round(weatherData.wind.speed);
  const weatherDescription = weatherData?.weather[0].description;

  return (
    <div className="max-w-100 mt-12 mx-auto bg-indigo-700 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ease-in-out">
      <div className="p-4">
        <input
          type="text"
          value={city}
          onChange={handleCityChange}
          className="border-2 border-gray-100 p-2 rounded w-full mb-4 bg-transparent"
          placeholder="Enter city name"
        />
        {error && city.length === 0 && (
          <div className="text-red-600 text-center font-bold mb-4">
            Please enter a city name.
          </div>
        )}
        {weatherData ? (
          <>
            <h2 className="text-xl font-bold text-center mb-2">
              {weatherData.name}
            </h2>
            <p
              className="text-3xl font-semibold text-center"
            >
              {roundedTemp}°C
            </p>
            <p className="text-md text-center">Feels like: {feelsLike}°C</p>
            <p className="text-md text-center">Humidity: {humidity}%</p>
            <p className="text-md text-center">Wind Speed: {windSpeed} mph</p>
            <p className="text-md text-center">Weather: {weatherDescription}</p>
          </>
        ) : (
          !error && <div className="text-gray-500 text-center">Loading...</div>
        )}
      </div>
    </div>
  );
};

export default WeatherCard;
