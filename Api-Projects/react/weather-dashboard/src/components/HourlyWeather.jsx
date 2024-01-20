import React, { useState, useEffect } from 'react';
import { getHourlyWeather } from '../api/WeatherService';
import { useCity } from '../context/CityContext';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const HourlyForecast = ({ date }) => {
    const { city } = useCity();
    const [hourlyData, setHourlyData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        getHourlyWeather(city.lat, city.lon)
            .then(data => {
                const twelveHoursData = data.slice(0, 12);
                setHourlyData(twelveHoursData);
                setError(null);
            })
            .catch(err => setError(err.message));
    }, [city]);

    // Assuming API returns wind speed in km/h and needs to be converted to mph
    const convertToMph = speedKmh => Math.round(speedKmh * 0.621371);

    const chartData = {
        labels: hourlyData.map(hour => new Date(hour.dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })),
        datasets: [
            {
                label: 'Temperature (°C)',
                data: hourlyData.map(hour => hour.temp),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                yAxisID: 'y-temp',
            },
            {
                label: 'Wind Speed (mph)',
                data: hourlyData.map(hour => convertToMph(hour.wind_speed)),
                borderColor: 'rgb(54, 162, 235)',
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                yAxisID: 'y-wind',
            }
        ],
    };

    const chartOptions = {
        scales: {
            x: {
                position: 'top',
                title: {
                    display: true,
                    text: 'Time'
                },
            },
            'y-temp': {
                type: 'linear',
                position: 'left',
                title: {
                    display: true,
                    text: 'Temperature (°C)'
                },
                ticks: {
                    stepSize: 1, // Ensure whole number steps for temperature
                },
            },
            'y-wind': {
                type: 'linear',
                position: 'right',
                title: {
                    display: true,
                    text: 'Wind Speed (mph)'
                },
                ticks: {
                    precision: 0, // Round to the nearest whole number
                },
                grid: {
                    drawOnChartArea: false,
                },
            }
        },
        animation: {
            duration: 1000,
        },
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                position: 'bottom',
            },
        },
    };

    if (error) {
        return <div className="text-red-600 text-center font-bold mb-4">{error}</div>;
    }

    if (!hourlyData.length) {
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
