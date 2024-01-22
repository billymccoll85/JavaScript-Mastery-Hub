import React, { useState, useEffect } from "react";
import { getCurrentWeather, getWeatherAlerts } from "../api/WeatherService";
import { useCity } from '../context/CityContext';
import AlertsModal from './AlertsModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThermometerHalf, faCloud } from '@fortawesome/free-solid-svg-icons';

const CurrentWeatherCard = () => {
  const { city } = useCity();
  const [weatherData, setWeatherData] = useState(null);
  const [alerts, setAlerts] = useState([]);
  const [error, setError] = useState(null);
  const [currentDateTime, setCurrentDateTime] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const weatherData = await getCurrentWeather(city.lat, city.lon);
        setWeatherData(weatherData);

        // Adjust local time using the timezone offset
        const localTime = new Date((new Date().getTime()) + city.timezoneOffset * 1000);
        setCurrentDateTime(localTime.toLocaleString('en-GB', {
          month: 'short', 
          day: 'numeric', 
          hour: 'numeric', 
          minute: '2-digit', 
          hour24: true 
        }));

        const alertData = await getWeatherAlerts(city.lat, city.lon);
        setAlerts(alertData);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, [city]); 

  if (error) {
    return <div className="text-red-600 text-center font-bold mb-4">{error}</div>;
  }

  if (!weatherData) {
    return <div className="text-gray-500 text-center">Loading...</div>;
  }

  const { temp, feels_like, humidity, wind_speed, weather, pressure, clouds, uvi, visibility, wind_deg } = weatherData;
  const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);
  const iconUrl = `http://openweathermap.org/img/wn/${weather[0].icon}.png`;

  return (
    <div className="bg-sky-200 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ease-in-out">
      <div className="p-4">
        <div className="text-rose-500 text-lg font-semibold">{currentDateTime}</div>
        <h2 className="text-3xl font-bold mb-2">{city.name}</h2>
        <div className="flex justify-start items-center">
          <img src={iconUrl} alt="Weather icon" className="currentWeatherIcon"/>
          <p className="text-4xl font-semibold">{Math.round(temp)}°C</p>
        </div>
        <AlertsModal alerts={alerts} />
        <div className="flex my-2 font-bold justify-between">
          <p className="text-lg mr-4"><FontAwesomeIcon icon={faThermometerHalf} /> Feels like: {Math.round(feels_like)}°C </p>
          <p className="text-lg"><FontAwesomeIcon icon={faCloud} /> {capitalizeFirstLetter(weather[0].description)}</p>
        </div>
        <div className="grid grid-cols-2 gap-1 text-sm md:text-md">
          <div>Humidity: {humidity}%</div>
          <div>Pressure: {pressure} hPa</div>
          <div>Cloudiness: {clouds}%</div>
          <div>UV Index: {uvi}</div>
          <div>Visibility: {visibility / 1000} km</div>
          <div>Wind Speed: {Math.round(wind_speed)} mph</div>
          <div>Wind Direction: {wind_deg}°</div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeatherCard;
