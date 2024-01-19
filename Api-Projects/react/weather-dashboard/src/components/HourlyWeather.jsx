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
                // Select the first 12 hours from the data
                const twelveHoursData = data.slice(0, 12);
                setHourlyData(twelveHoursData);
                setError(null);
            })
            .catch(err => setError(err.message));
    }, [city]);

    const chartData = {
        labels: hourlyData.map(hour => new Date(hour.dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })),
        datasets: [
            {
                label: 'Temperature (°C)',
                data: hourlyData.map(hour => Math.round(hour.temp)),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                yAxisID: 'y-temp',
                type: 'line',
                fill: false,
            },
            {
                label: 'Wind Speed (mph)',
                data: hourlyData.map(hour => Math.round(hour.wind_speed * 2.237)),
                borderColor: 'rgb(54, 162, 235)',
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                yAxisID: 'y-wind',
                type: 'line',
                fill: false,
            }
        ],
    };

    const chartOptions = {
        scales: {
            y: {
                type: 'linear',
                display: true,
                position: 'left',
                id: 'y-temp',
                title: {
                    display: true,
                    text: 'Temperature (°C)'
                },
                ticks: {
                    stepSize: 5,
                    callback: function(value) {
                        return Number.isInteger(value) ? value : null;
                    }
                }
            },
            y2: {
                type: 'linear',
                display: true,
                position: 'right',
                id: 'y-wind',
                grid: {
                    drawOnChartArea: false,
                },
                title: {
                    display: true,
                    text: 'Wind Speed (mph)'
                },
                ticks: {
                    stepSize: 2,
                    precision: 0
                }
            },
            x: {
                position: 'top',
                title: {
                    display: true,
                    text: 'Time'
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
