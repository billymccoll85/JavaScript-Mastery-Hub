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
                const end = start + 12; // 2 previous + 10 future hours
                const selectedData = data.slice(start, end).map(hour => ({
                    time: formatTime(hour.dt),
                    temp: Math.round(hour.temp) // Round to nearest whole number
                }));

                setHourlyData(selectedData);
                setError(null);
            })
            .catch(err => setError(err.message));
    }, [city]);

    const formatTime = (unixTime) => {
        const date = new Date(unixTime * 1000);
        if (date.getHours() === 0) {
            return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
        }
        const hours = date.getHours();
        const suffix = hours >= 12 ? 'PM' : 'AM';
        const formattedHour = hours % 12 || 12; // Convert to 12-hour format
        return `${formattedHour} ${suffix}`;
    };

    // Find max and min temperature for dynamic y-axis scaling
    const maxTemp = Math.max(...hourlyData.map(hour => hour.temp));
    const minTemp = Math.min(...hourlyData.map(hour => hour.temp));
    const yAxisMin = Math.floor(minTemp / 5) * 5 - 15;
    const yAxisMax = Math.ceil(maxTemp / 5) * 5 + 15;

    const chartData = {
        labels: hourlyData.map(hour => hour.time),
        datasets: [
            {
                label: 'Temperature (°C)',
                data: hourlyData.map(hour => hour.temp),
                borderColor: '#b91c1c', // Red color
                backgroundColor: 'rgba(185, 28, 28, 0.5)',
            }
        ],
    };

    const chartOptions = {
        scales: {
            y: {
                beginAtZero: false,
                min: yAxisMin,
                max: yAxisMax,
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
