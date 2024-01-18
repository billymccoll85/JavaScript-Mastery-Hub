import React, { useState, useEffect } from 'react';
import { getWeeklyWeather } from '../api/WeatherService';

const WeeklyWeather = () => {
  const [lat, lon] = [51.5074, -0.1278]; // Coordinates for London, UK (or any other location)
  const [weeklyData, setWeeklyData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getWeeklyWeather(lat, lon)
      .then((data) => {
        setWeeklyData(data);
        setError(null);
      })
      .catch((err) => setError(err.message));
  }, [lat, lon]);

  const formatDate = (unixTime) => {
    const date = new Date(unixTime * 1000);
    return date.toLocaleDateString();
  };

  if (error) {
    return <div className="text-red-600 text-center font-bold mb-4">{error}</div>;
  }

  if (!weeklyData.length) {
    return <div className="text-gray-500 text-center">Loading...</div>;
  }

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden my-8">
      <div className="p-4">
        <h2 className="text-xl font-bold text-center mb-4">Weekly Weather Forecast</h2>
        <ul>
          {weeklyData.map((day, index) => (
            <li key={index} className="my-2">
              <span className="font-semibold">{formatDate(day.dt)}</span>: {Math.round(day.temp.day)}°C, {day.weather[0].main}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WeeklyWeather;
