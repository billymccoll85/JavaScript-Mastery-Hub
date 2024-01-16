import React, { useState } from 'react';
import CurrentWeatherCard from './CurrentWeatherCard';
import FiveDayForecast from './FiveDayForecast';

const Dashboard = () => {
  // State for selected city, default to 'London'
  const [selectedCity, setSelectedCity] = useState('London');

  // Callback function to update the selected city from CurrentWeatherCard
  const handleCityChange = (city) => {
    setSelectedCity(city);
  };

  return (
    <div className='dashboard-layout flex justify-start'>
      <div className="container mx-auto">
        {/* Pass the selectedCity and handleCityChange as props to CurrentWeatherCard */}
        <CurrentWeatherCard city={selectedCity} onCityChange={handleCityChange} />
      </div>
      {/* Pass the selectedCity as a prop to FiveDayForecast */}
      <FiveDayForecast city={selectedCity}/>
    </div>
  );
};

export default Dashboard;
