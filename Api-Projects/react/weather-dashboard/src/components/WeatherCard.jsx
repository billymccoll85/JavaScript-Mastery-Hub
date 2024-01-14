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

const WeatherCard = ({ city }) => {
  // useState to manage weather data and error states
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  // useEffect to fetch weather data when the component mounts or the city changes
  useEffect(() => {
    fetchCurrentWeather(city)
      .then((data) => {
        setWeatherData(data); // Update the weather data state
        setError(null); // Reset the error state
      })
      .catch((err) => setError(err.message)); // Set the error state if there's an error
  }, [city]); // The effect depends on the city variable

  // Render error message if there is an error
  if (error) {
    return (
      <div className="text-red-600 text-center font-bold p-4">
        Error: {error}
      </div>
    );
  }

  // Render loading state if weather data is not yet fetched
  if (!weatherData) {
    return <div className="text-gray-500 text-center p-4">Loading...</div>;
  }

  // Round temperature values to the nearest integer for
  //   better readability
  const roundedTemp = Math.round(weatherData.main.temp);
  const feelsLike = Math.round(weatherData.main.feels_like);
  const humidity = weatherData.main.humidity;

  // Render the weather card with weather data
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
