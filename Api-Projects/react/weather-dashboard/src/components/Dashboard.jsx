import React from 'react';
import CurrentWeatherCard from './CurrentWeatherCard';

const Dashboard = () => {
  return (
    <div className='dashboard-layout flex justify-center items-center'>
        <div className="container mx-auto">
            <CurrentWeatherCard />
        </div>
    </div>
  );
};

export default Dashboard;
