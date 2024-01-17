import React, { useState, useEffect } from "react";
import { fetchSevenDayForecast } from "../api/WeatherService";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const SevenDayForecast = ({ city }) => {
  const [forecastData, setForecastData] = useState(null);
  const [error, setError] = useState(null);
  const [openDay, setOpenDay] = useState(null);

  useEffect(() => {
    if (city) {
      fetchSevenDayForecast(city)
        .then((data) => {
          setForecastData(data);
          setError(null);
        })
        .catch((err) => {
          console.error("Error fetching 7-day forecast:", err);
          setError(err.message);
        });
    }
  }, [city]);

  const toggleDay = (index) => {
    setOpenDay(openDay === index ? null : index);
  };

  if (!city) {
    return <p className="text-center text-gray-600">Please select a city to view the forecast.</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">Error fetching forecast: {error}</p>;
  }

  if (!forecastData) {
    return <p className="text-center text-gray-500">Loading...</p>;
  }

  return (
    <div className="max-w-4xl mx-auto my-8 p-4 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold text-center mb-4">7-Day Forecast for {city}</h2>
      <div className="forecast-container space-y-2">
        {forecastData.daily.map((day, index) => {
          const date = new Date(day.dt * 1000);
          const dayString = date.toLocaleDateString(undefined, { weekday: 'long', month: 'short', day: 'numeric' });
          const iconCode = day.weather[0].icon;
          const temp = Math.round(day.temp.day);

          return (
            <div key={index} className="forecast-day">
              <div className="forecast-header flex items-center justify-between p-3 bg-indigo-500 text-white rounded cursor-pointer" onClick={() => toggleDay(index)}>
                <div className="flex items-center space-x-3">
                  <img src={`http://openweathermap.org/img/wn/${iconCode}.png`} alt="Weather icon" className="w-10 h-10" />
                  <p>{dayString}</p>
                  <p className="font-semibold">{temp}°C</p>
                  <p>{day.weather[0].main}</p>
                </div>
                <FontAwesomeIcon icon={openDay === index ? faChevronUp : faChevronDown} />
              </div>
              {openDay === index && (
                <div className="forecast-body p-3 bg-gray-100 rounded">
                  {/* Add additional day details here */}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SevenDayForecast;
