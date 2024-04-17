// CurrentWeather.jsx
import React from 'react';

const CurrentWeather = ({ data }) => {
  if (!data) return <div className="text-center text-lg">No current weather data available.</div>;

  return (
    <div className="p-5 bg-blue-100 rounded-lg shadow">
      <h2 className="text-2xl font-bold text-blue-700">Current Weather</h2>
      <p className="text-xl">Temperature: {data.temp}°C</p>
      <p className="text-xl">Conditions: {data.weather[0].description}</p>
    </div>
  );
};

export default CurrentWeather;
