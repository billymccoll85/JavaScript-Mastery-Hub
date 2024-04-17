// DailyForecast.jsx
import React from 'react';

const DailyForecast = ({ data }) => {
  if (!data || data.length === 0) return <div className="text-center text-lg">No daily forecast data available.</div>;

  return (
    <div className="p-5 bg-red-100 rounded-lg shadow">
      <h2 className="text-2xl font-bold text-red-700">Daily Forecast</h2>
      <ul>
        {data.map((day, index) => (
          <li key={index} className="text-xl">
            Date: {new Date(day.dt * 1000).toLocaleDateString()}, High: {day.temp.max}°C, Low: {day.temp.min}°C, {day.weather[0].description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DailyForecast;
