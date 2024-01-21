import React, { useState, useEffect } from 'react';
import { getHourlyWeather } from '../api/WeatherService';
import { useCity } from '../context/CityContext';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const HourlyForecast = () => {
    const { city } = useCity();
    const [hourlyData, setHourlyData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        getHourlyWeather(city.lat, city.lon)
            .then(data => {
                const currentHour = new Date().getHours();
                const currentIndex = data.findIndex(hour => 
                    new Date(hour.dt * 1000).getHours() === currentHour
                );

                const start = Math.max(0, currentIndex - 2);
                const end = start + 12; // 2 previous + 10 future hoursP
                const selectedData = data.slice(start, end).map(hour => ({
                    time: formatTime(hour.dt),
                    temp: Math.round(hour.temp)
                }));

                setHourlyData(selectedData);
                setError(null);
            })
            .catch(err => setError(err.message));
    }, [city]);

    const formatTime = (unixTime) => {
        const date = new Date(unixTime * 1000);
        if (date.getHours() === 0 || date.getHours() === 12) {
            return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' }) + 
                   ' ' + date.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', hour12: true });
        }
        return date.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', hour12: true });
    };
    

    const temperatures = hourlyData.map(hour => hour.temp);
    const minTemperature = Math.min(...temperatures);
    const maxTemperature = Math.max(...temperatures);

    const chartData = {
        labels: hourlyData.map(hour => hour.time),
        datasets: [
            {
                label: 'Temperature (°C)',
                data: temperatures,
                borderColor: 'rgb(75, 192, 192)',
                backgroundColor: 'rgba(75, 192, 192, 0.5)',
            }
        ],
    };

    const chartOptions = {
        scales: {
            y: {
                beginAtZero: false,
                min: Math.floor(minTemperature / 5) * 5,
                max: Math.ceil(maxTemperature / 5) * 5,
                stepSize: 5,
                title: {
                    display: true,
                    text: 'Temperature (°C)'
                },
            },
            x: {
                position: 'top',
                title: {
                    display: true,
                    text: 'Time'
                },
            },
        },
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: `Hourly Temperature Forecast for ${city.name}`,
            },
        },
        responsive: true,
        maintainAspectRatio: false,
    };

    if (error) {
        return <div className="text-red-600 text-center font-bold mb-4">{error}</div>;
    }

    if (hourlyData.length === 0) {
        return <div className="text-gray-500 text-center">Loading...</div>;
    }

    return (
        <div className="bg-sky-200 rounded-xl shadow-md overflow-hidden p-4">
            <h2 className="text-xl font-semibold text-center mb-4">Hourly Weather Forecast for {city.name}</h2>
            <div style={{ height: '400px' }}>
                <Line data={chartData} options={chartOptions} />
            </div>
        </div>
    );
};

export default HourlyForecast;
