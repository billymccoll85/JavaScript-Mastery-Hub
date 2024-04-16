import React from 'react';
import Container from './components/Container';
import Grid from './components/Grid';
import CurrentWeather from './components/CurrentWeather';
import HourlyForecast from './components/HourlyForecast';
import DailyForecast from './components/DailyForecast';

/**
 * Main Application Component
 * Combines all the main components of the weather dashboard using a container and grid layout.
 *
 * Subcomponents:
 * - CurrentWeather: Displays current weather conditions.
 * - HourlyForecast: Shows weather forecast for the next few hours.
 * - DailyForecast: Shows weather forecast for the next several days.
 */
const App = () => {
  const weatherData = {
    current: {},  // Data for the current weather conditions
    hourly: [],   // Array of data for the hourly forecast
    daily: []     // Array of data for the daily forecast
  };

  return (
    <Container>
      <Grid>
        {/* Passing 'weatherData' to the CurrentWeather component as a prop named 'weatherData' */}
        <CurrentWeather weatherData={weatherData.current} />
        {/* Passing 'forecastData' to the HourlyForecast component as a prop named 'forecastData' */}
        <HourlyForecast forecastData={weatherData.hourly} />
        {/* Passing 'forecastData' to the DailyForecast component as a prop named 'forecastData' */}
        <DailyForecast forecastData={weatherData.daily} />
      </Grid>
    </Container>
  );
};

export default App;
