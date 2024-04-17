// HourlyForecast.jsx
import React from 'react';

const HourlyForecast = ({ data }) => {
  if (!data || data.length === 0) return <div className="text-center text-lg">No hourly forecast data available.</div>;

  return (
    <div className="p-5 bg-green-100 rounded-lg shadow">
      <h2 className="text-2xl font-bold text-green-700">Hourly Forecast</h2>
      <ul>
        {data.map((hour, index) => (
          <li key={index} className="text-xl">
            Time: {new Date(hour.dt * 1000).toLocaleTimeString()}, Temp: {hour.temp}°C, {hour.weather[0].description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HourlyForecast;
