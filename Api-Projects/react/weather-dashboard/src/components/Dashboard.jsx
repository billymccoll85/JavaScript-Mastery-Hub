import React, { useState } from 'react';
import CurrentWeatherCard from './CurrentWeatherCard';
import SevenDayForecast from './SevenDayForecast';

const Dashboard = () => {
  // State for selected city, default to 'London'
  const [selectedCity, setSelectedCity] = useState('London');

  // Callback function to update the selected city from CurrentWeatherCard
  const handleCityChange = (city) => {
    setSelectedCity(city);
  };

  return (
    <div className='main-container flex flex-col justify-start'>
      {/* Container for CurrentWeatherCard */}
      <div className="weather-widget-container mx-auto">
        {/* Pass the selectedCity and handleCityChange as props to CurrentWeatherCard */}
        <CurrentWeatherCard city={selectedCity} onCityChange={handleCityChange} />
      </div>
      {/* Container for SevenDayForecast */}
      <div className="forecast-container mx-auto mt-4">
        {/* Separate row container for SevenDayForecast */}
        {/* Pass the selectedCity as a prop to SevenDayForecast */}
        <SevenDayForecast city={selectedCity}/>
      </div>
    </div>
  );
};

export default Dashboard;
