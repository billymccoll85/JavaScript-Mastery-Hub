import React, { useState, useEffect } from 'react';
import { getWeeklyWeather } from '../api/WeatherService';
import { useCity } from '../context/CityContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const WeeklyWeather = () => {
    const { city } = useCity();
    const [weeklyData, setWeeklyData] = useState([]);
    const [error, setError] = useState(null);
    const [openDayIndex, setOpenDayIndex] = useState(null); // Track which day is open

    useEffect(() => {
        getWeeklyWeather(city.lat, city.lon)
            .then((data) => {
                setWeeklyData(data);
                setError(null);
            })
            .catch((err) => setError(err.message));
    }, [city]);

    const formatDate = (unixTime) => {
        const date = new Date(unixTime * 1000);
        const day = date.toLocaleString('default', { weekday: 'short' });
        const month = date.toLocaleString('default', { month: 'short' });
        return `${day}, ${month} ${date.getDate()}`;
    };

    const toggleDay = (index) => {
        setOpenDayIndex(openDayIndex === index ? null : index); // Toggle the day
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
                <h2 className="text-xl font-semibold text-center mb-4">Weekly Weather Forecast for {city.name}</h2>
                <ul className='flex flex-col items-center'>
                     {weeklyData.map((day, index) => (
                        <li key={index} className="my-2 w-full">
                            <div onClick={() => toggleDay(index)} className="cursor-pointer flex justify-between items-center">
                                <span>{formatDate(day.dt)}</span>
                                
                                <div className="flex items-center">
                                    {/* Weather Icon */}
                                    {day.weather[0].icon && (
                                        <img 
                                            src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`} 
                                            alt={day.weather[0].main} 
                                            className="mr-2"
                                        />
                                    )}
                                    {/* Temperature */}
                                    <span>{Math.round(day.temp.max)} / {Math.round(day.temp.min)}°C</span>
                                </div>

                                <span className="ml-2">{day.weather[0].main}</span>
                                <FontAwesomeIcon icon={openDayIndex === index ? faChevronUp : faChevronDown} />
                            </div>
                            {openDayIndex === index && (
                                <div className="mt-2">
                                    {/* Additional details can be added here */}
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default WeeklyWeather;
