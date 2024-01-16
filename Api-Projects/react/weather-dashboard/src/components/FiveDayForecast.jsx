import React, { useState, useEffect } from "react";
import { fetchFiveDayForecast } from "../api/WeatherService";

const FiveDayForecast = ({ city }) => {
  const [forecastData, setForecastData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (city) {
      fetchFiveDayForecast(city)
        .then((data) => {
          setForecastData(data);
          setError(null);
        })
        .catch((err) => {
          console.error("Error fetching 5-day forecast:", err);
          setError(err.message);
        });
    }
  }, [city]);

  if (!city) {
    return <p>Please select a city to view the forecast.</p>;
  }

  if (error) {
    return <p>Error fetching forecast: {error}</p>;
  }

  if (!forecastData) {
    return <p>Loading...</p>;
  }

  return (
    <div className="five-day-forecast">
      <h2>5-Day Forecast for {city}</h2>
      <div className="forecast-container">
        {forecastData.list.map((forecast, index) => {
          // Assuming the API returns a list of forecasts
          const date = new Date(forecast.dt * 1000); // Convert Unix timestamp to JavaScript Date
          const day = date.toLocaleDateString(undefined, { weekday: "long" });
          const temp = Math.round(forecast.main.temp);

          return (
            <div key={index} className="forecast-day">
              <p>{day}</p>
              <img
                src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`}
                alt="Weather icon"
              />
              <p>{temp}°C</p>
              <p>{forecast.weather[0].description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FiveDayForecast;
