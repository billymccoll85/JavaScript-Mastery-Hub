import React, { useState, useEffect } from 'react';
import { fetchDailyWeather } from './api/weatherService';

function DailyForecast({ lat, lon }) {
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadData() {
      try {
        const data = await fetchDailyWeather(lat, lon);
        setForecast(data.daily);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    }

    loadData();
  }, [lat, lon]);

  if (loading) return <p>Loading daily forecast...</p>;
  if (error) return <p>Error loading forecast: {error}</p>;
  return (
    <div>
      <h2>Daily Weather Forecast</h2>
      <ul>
        {forecast && forecast.map((day, index) => (
          <li key={index}>
            Date: {new Date(day.dt * 1000).toLocaleDateString()}, High: {day.temp.max}°C, Low: {day.temp.min}°C, {day.weather[0].description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DailyForecast;
