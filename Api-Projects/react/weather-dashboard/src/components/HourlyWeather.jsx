import React, { useState, useEffect } from 'react';
import { getHourlyWeather } from '../api/WeatherService'; // Ensure you have a similar API function
import { useCity } from '../context/CityContext';

const HourlyForecast = ({ date }) => {
    const { city } = useCity();
    const [hourlyData, setHourlyData] = useState([]);
    const [error, setError] = useState(null);

    // In HourlyForecast.jsx
    useEffect(() => {
        getHourlyWeather(city.lat, city.lon)
            .then(data => {
                setHourlyData(data);
                setError(null);
            })
            .catch(err => setError(err.message));
    }, [city]);


    const formatTime = (unixTime) => {
        const date = new Date(unixTime * 1000);
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    if (error) {
        return <div className="text-red-600 text-center font-bold mb-4">{error}</div>;
    }

    if (!hourlyData.length) {
        return <div className="text-gray-500 text-center">Loading...</div>;
    }

    return (
        <div className="bg-sky-200 rounded-xl shadow-md overflow-hidden p-4">
            <h2 className="text-xl font-semibold text-center mb-4">Hourly Weather Forecast</h2>
            <ul className="flex flex-col items-center">
                {hourlyData.map((hour, index) => (
                    <li key={index} className="my-2">
                        <span>{formatTime(hour.dt)}</span>
                        <span className="ml-2">{Math.round(hour.temp)}°C</span>
                        <span className="ml-2">{hour.weather[0].main}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HourlyForecast;
