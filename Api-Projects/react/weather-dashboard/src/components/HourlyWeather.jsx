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
                setHourlyData(data);
                setError(null);
            })
            .catch(err => setError(err.message));
    }, [city]);

    // Assuming you want to show forecast for next few hours
    const temperatures = hourlyData.map(hour => Math.round(hour.temp));
    const labels = hourlyData.map(hour => new Date(hour.dt * 1000).toLocaleTimeString('en-GB'));

    const minTemperature = Math.min(...temperatures);
    const maxTemperature = Math.max(...temperatures);

    const chartData = {
        labels: labels,
        datasets: [
            {
                label: 'Temperature (°C)',
                data: temperatures,
                borderColor: 'red',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                fill: false,
            }
        ],
    };

    const chartOptions = {
        scales: {
            y: {
                beginAtZero: false,
                suggestedMin: minTemperature - 5, // provide some padding
                suggestedMax: maxTemperature + 5,
                stepSize: 1,
                position: 'left',
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
                display: true,
            },
            title: {
                display: true,
                text: `Hourly Forecast for ${city.name}`,
            },
            tooltip: {
                enabled: true,
            },
        },
        elements: {
            line: {
                borderWidth: 2,
            },
        },
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
            <div style={{ height: '400px' }}>
                <Line data={chartData} options={chartOptions} />
            </div>
        </div>
    );
};

export default HourlyForecast;
