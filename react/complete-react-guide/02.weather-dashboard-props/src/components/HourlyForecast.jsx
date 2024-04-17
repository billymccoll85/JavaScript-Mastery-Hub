import React, { useState, useEffect } from 'react';
import { fetchHourlyWeather } from './api/weatherService';

function HourlyForecast({ lat, lon }) {
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadData() {
      try {
        const data = await fetchHourlyWeather(lat, lon);
        setForecast(data.hourly);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    }

    loadData();
  }, [lat, lon]);

  if (loading) return <p>Loading hourly forecast...</p>;
  if (error) return <p>Error loading forecast: {error}</p>;
  return (
    <div>
      <h2>Hourly Weather Forecast</h2>
      <ul>
        {forecast && forecast.map((hour, index) => (
          <li key={index}>
            Time: {new Date(hour.dt * 1000).toLocaleTimeString()}, Temp: {hour.temp}°C, {hour.weather[0].description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HourlyForecast;
