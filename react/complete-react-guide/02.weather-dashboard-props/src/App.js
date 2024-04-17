import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Container from './components/Container';
import Grid from './components/Grid';
import CurrentWeather from './components/CurrentWeather';
import HourlyForecast from './components/HourlyForecast';
import DailyForecast from './components/DailyForecast';
import { getCurrentWeather, getWeeklyWeather, getHourlyWeather, getWeatherAlerts } from './api/weatherService';

const App = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [weeklyWeather, setWeeklyWeather] = useState(null);
  const [hourlyWeather, setHourlyWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const lat = 35.6895; // Example latitude for Tokyo
  const lon = 139.6917; // Example longitude for Tokyo

  useEffect(() => {
    const fetchData = async () => {
      try {
        const current = await getCurrentWeather(lat, lon);
        const weekly = await getWeeklyWeather(lat, lon);
        const hourly = await getHourlyWeather(lat, lon);
        setCurrentWeather(current);
        setWeeklyWeather(weekly);
        setHourlyWeather(hourly);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch data:", err);
        setError('Failed to fetch weather data.');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <Container>
      <Grid>
        <CurrentWeather data={currentWeather} />
        <HourlyForecast data={hourlyWeather} />
        <DailyForecast data={weeklyWeather} />
      </Grid>
    </Container>
  );
};

export default App;
