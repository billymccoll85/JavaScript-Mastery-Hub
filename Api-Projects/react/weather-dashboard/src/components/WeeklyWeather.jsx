// WeeklyWeather.jsx
import React, { useState, useEffect } from 'react';
import { getWeeklyWeather } from '../api/WeatherService';
import { useCity } from '../context/CityContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import WindDirection from './WindDirection';

const WeeklyWeather = () => {
    const { city } = useCity();
    const [weeklyData, setWeeklyData] = useState([]);
    const [openDayIndex, setOpenDayIndex] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        getWeeklyWeather(city.lat, city.lon)
            .then((data) => {
                setWeeklyData(data);
                setError(null);
            })
            .catch((err) => setError(err.message));
    }, [city]);

    if (error) {
        // Display the error message
        return (
            <div className="text-red-600 text-center font-bold mb-4">
                Error: {error}
            </div>
        );
    }

    const formatDate = (unixTime) => {
        const date = new Date(unixTime * 1000);
        const day = date.toLocaleString('default', { weekday: 'short' });
        const month = date.toLocaleString('default', { month: 'short' });
        return `${day}, ${month} ${date.getDate()}`;
    };

    const toggleDay = (index) => {
        setOpenDayIndex(openDayIndex === index ? null : index);
    };

    const metersPerSecondToMilesPerHour = (speed) => {
        return Math.round(speed * 2.23694); // Conversion from m/s to mph
    };

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    function windDirection(degree) {
        const sectors = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
        degree += 11.25;
        if (degree < 0) {
            degree = 360 - Math.abs(degree) % 360;
        } else {
            degree = degree % 360;
        }
        const which = parseInt(degree / 22.5, 10);
        return sectors[which];
    }
    
    function beaufortScale(windSpeedMph) {
        const descriptions = [
          "Calm", "Light Air", "Light Breeze", "Gentle Breeze",
          "Moderate Breeze", "Fresh Breeze", "Strong Breeze",
          "Moderate or Near Gale", "Gale or Fresh Gale",
          "Strong Gale", "Whole Gale or Storm", "Violent Storm", 
          "Hurricane"
        ];
      
        const thresholds = [1, 4, 8, 13, 19, 25, 32, 39, 47, 55, 64, 73];
      
        const index = thresholds.findIndex(threshold => windSpeedMph < threshold);
        return descriptions[index !== -1 ? index : descriptions.length - 1];
    }

    return (
        <div className="bg-sky-200 rounded-xl shadow-md overflow-hidden">
            <div className="p-4">
                <h2 className="text-xl font-semibold text-center mb-4">Weekly Weather Forecast for {city.name}</h2>
                <ul className='flex flex-col items-center'>
                    {weeklyData.map((day, index) => (
                        <li key={index} className="w-full">
                            <div onClick={() => toggleDay(index)} 
                                 className={`cursor-pointer flex justify-between items-center px-3 ${openDayIndex === index ? 'rounded-xl bg-sky-300' : ''}`}>
                                <span>{formatDate(day.dt)}</span>
                                <div className="flex items-center">
                                    {day.weather[0].icon && (
                                        <img 
                                            src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`} 
                                            alt={day.weather[0].main} 
                                            className="mr-2"
                                        />
                                    )}
                                    <span>{Math.round(day.temp.max)} / {Math.round(day.temp.min)}°C</span>
                                </div>
                                <span className="ml-2">{day.weather[0].main}</span>
                                <FontAwesomeIcon icon={openDayIndex === index ? faChevronUp : faChevronDown} />
                            </div>
                            {openDayIndex === index && (
                                <div className="accordion-body flex flex-col gap-4 p-4">
                                    <div className='flex flex-row'>
                                        {day.weather[0].icon && (
                                            <img 
                                                src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`} 
                                                alt={day.weather[0].main} 
                                                className="inline-block mr-1 weeklyWeatherIcon"
                                            />
                                        )}
                                        <div>
                                            <p className='font-bold text-md'>
                                                {capitalizeFirstLetter(day.weather[0].description)}.{' '}
                                                {beaufortScale(metersPerSecondToMilesPerHour(day.wind_speed))}
                                            </p>
                                            <p className='text-sm'>Highs {Math.round(day.temp.max)}°C, Lows {Math.round(day.temp.min)}°C.</p>
                                        </div>
                                    </div>
                                    <div className='flex flex-row justify-between text-sm'>
                                        <div>
                                            <p>Precipitation: {day.pop * 100}%</p>
                                            <div className="flex items-center">
                                                <WindDirection windDeg={day.wind_deg} />
                                                <p className="ml-1">{windDirection(day.wind_deg)} Wind: {metersPerSecondToMilesPerHour(day.wind_speed)} mphh</p>
                                            </div>
                                        </div>
                                        <div>
                                            <p>Pressure: {day.pressure} hPa</p>
                                            <p>Humidity: {day.humidity}%</p>
                                        </div>
                                        <div>
                                            <p>UV Index: {day.uvi}</p>
                                            <p>Dew point: {Math.round(day.dew_point)}°C</p>
                                        </div>
                                    </div>
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
