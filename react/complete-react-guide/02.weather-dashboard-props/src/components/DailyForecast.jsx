import React from 'react';

const DailyForecast = ({ data }) => {
  if (!data || data.length === 0) return <div className="text-center text-lg">No daily forecast data available.</div>;

  return (
    <div className="p-5 bg-red-100 rounded-lg shadow">
      <h2 className="text-2xl font-bold text-red-700">Daily Forecast</h2>
      <ul>
        {data.map((day, index) => {
          // Constructing the URL for the weather icon
          const iconUrl = `https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`;
          return (
            <div key={index} className="bg-white rounded-lg shadow-lg p-4 my-4">
              <div className="font-medium text-lg mb-2">Date: {new Date(day.dt * 1000).toLocaleDateString()}</div>
              <li className="flex items-center text-sm">
                <img src={iconUrl} alt="Weather icon" className="w-10 h-10 mr-2"/>
                High: {Math.round(day.temp.max)}°C, Low: {Math.round(day.temp.min)}°C, {day.weather[0].description}
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default DailyForecast;
