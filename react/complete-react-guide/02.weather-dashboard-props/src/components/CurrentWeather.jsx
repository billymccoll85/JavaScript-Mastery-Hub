import React from 'react';

const CurrentWeather = ({ data }) => {
  if (!data) return <div className="text-center text-lg">No current weather data available.</div>;

  // Rounding the temperature to the nearest whole number
  const roundedTemp = Math.round(data.temp);
  // Constructing the URL for the weather icon
  const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

  return (
    <div className="p-5 bg-blue-100 rounded-lg shadow">
      <h2 className="text-2xl font-bold text-blue-700">Current Weather</h2>
      <div className="bg-white rounded-lg shadow-lg p-4 my-4 flex items-center space-x-4">
        <img src={iconUrl} alt="Weather icon" className="w-16 h-16" />
        <div>
          <p className="text-sm">Temperature: {roundedTemp}°C</p>
          <p className="text-sm">Conditions: {data.weather[0].description}</p>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
