import React, { useState, useEffect } from "react";
import { fetchSevenDayForecast } from "../api/WeatherService";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const SevenDayForecast = ({ lat, lon }) => {
  const [forecastData, setForecastData] = useState(null);
  const [error, setError] = useState(null);
  const [openDayIndex, setOpenDayIndex] = useState(null);

  useEffect(() => {
    if (lat && lon) {
      fetchSevenDayForecast(lat, lon)
        .then(data => {
          setForecastData(data.daily); // Access the daily forecast data
          setError(null);
        })
        .catch(err => {
          setError(err.message);
        });
    }
  }, [lat, lon]);

  const toggleDay = (index) => {
    setOpenDayIndex(openDayIndex === index ? null : index);
  };

  if (!lat || !lon) {
    return <p>Please provide latitude and longitude to view the forecast.</p>;
  }

  if (error) {
    return <p>Error fetching forecast: {error}</p>;
  }

  if (!forecastData) {
    return <p>Loading...</p>;
  }

  return (
    <div className="seven-day-forecast max-w-4xl mx-auto my-8 p-4 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold text-center mb-4">7-Day Forecast</h2>
      {forecastData.map((day, index) => {
        const date = new Date(day.dt * 1000);
        const dayString = date.toLocaleDateString(undefined, { weekday: 'long', month: 'short', day: 'numeric' });
        const tempMax = Math.round(day.temp.max);
        const tempMin = Math.round(day.temp.min);
        const iconCode = day.weather[0].icon;
        const weatherMain = day.weather[0].main;

        return (
          <div key={index} className="mb-2">
            <div className="flex justify-between items-center bg-blue-500 text-white p-3 rounded cursor-pointer" onClick={() => toggleDay(index)}>
              <div className="flex items-center space-x-2">
                <span>{dayString}</span>
                <img src={`http://openweathermap.org/img/wn/${iconCode}.png`} alt="Weather icon" className="w-6 h-6" />
                <span>{tempMax}°C / {tempMin}°C</span>
                <span>{weatherMain}</span>
              </div>
              <FontAwesomeIcon icon={openDayIndex === index ? faChevronUp : faChevronDown} />
            </div>
            {openDayIndex === index && (
              <div className="p-3 bg-gray-100 rounded">
                {/* Additional details for each day can be added here */}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default SevenDayForecast;
