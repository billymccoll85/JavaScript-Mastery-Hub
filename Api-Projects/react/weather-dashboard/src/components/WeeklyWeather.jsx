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
        const day = date.toLocaleString('default', { weekday: 'short' });
        const month = date.toLocaleString('default', { month: 'short' });
        return `${day}, ${month} ${date.getDate()}`;
    };

    if (error) {
        return <div className="text-red-600 text-center font-bold mb-4">{error}</div>;
    }

    if (!weeklyData.length) {
        return <div className="text-gray-500 text-center">Loading...</div>;
    }

    return (
        <div className="bg-sky-200 rounded-xl shadow-md overflow-hidden">
            <div className="p-4">
                <h2 className="text-xl font-semibold text-center mb-4">Weekly Weather Forecast</h2>
                <ul>
                    {weeklyData.map((day, index) => (
                        <li key={index} className="my-2">
                            <span>{formatDate(day.dt)}</span>
                            <span className="ml-2">{Math.round(day.temp.max)}°C / {Math.round(day.temp.min)}°C</span>
                            <span className="ml-2">{day.weather[0].main}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default WeeklyWeather;
