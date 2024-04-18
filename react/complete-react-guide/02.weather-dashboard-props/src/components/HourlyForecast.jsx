import React from 'react';

const HourlyForecast = ({ data }) => {
  if (!data || data.length === 0) return <div className="text-center text-lg">No hourly forecast data available.</div>;

  return (
    <div className="p-5 bg-green-100 rounded-lg shadow">
      <h2 className="text-2xl font-bold text-green-700">Hourly Forecast</h2>
      <ul>
        {data.map((hour, index) => {
          // Constructing the URL for the weather icon
          const iconUrl = `https://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`;
          // Formatting the time to show in 12-hour format with AM/PM
          const formattedTime = new Date(hour.dt * 1000).toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
          });

          return (
            <div key={index} className="bg-white rounded-lg shadow-lg p-4 my-4">
              <div className="font-medium text-lg mb-2">Time: {formattedTime}</div>
              <div className="flex items-center text-sm">
                <img src={iconUrl} alt="Weather icon" className="w-10 h-10 mr-2" />
                <div>Temp: {Math.round(hour.temp)}°C, {hour.weather[0].description}</div>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default HourlyForecast;
