import React from 'react';
import CurrentWeatherCard from './CurrentWeatherCard';

const Dashboard = () => {
  return (
    <div className='dashboard-layout flex justify-start'>
        <div className="container mx-auto">
            <CurrentWeatherCard />
        </div>
    </div>
  );
};

export default Dashboard;
