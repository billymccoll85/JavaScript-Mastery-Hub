import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const TempLineChart = ({ hourlyData }) => {
    const chartRef = useRef(null);

    useEffect(() => {
        if (hourlyData.length === 0) return;

        const ctx = chartRef.current.getContext('2d');
        const temps = hourlyData.map(data => Math.round(data.temp));
        const labels = hourlyData.map(data => new Date(data.dt * 1000).toLocaleTimeString('en-GB'));

        const minTemp = Math.floor(Math.min(...temps) / 5) * 5;
        const maxTemp = Math.ceil(Math.max(...temps) / 5) * 5;

        new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Temperature (°C)',
                    data: temps,
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1,
                }],
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: false,
                        min: minTemp,
                        max: maxTemp,
                        ticks: {
                            stepSize: 5,
                        },
                    },
                },
            },
        });
    }, [hourlyData]);

    return <canvas ref={chartRef}></canvas>;
};

export default TempLineChart;
