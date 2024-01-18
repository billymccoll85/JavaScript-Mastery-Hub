import React from 'react';
import CurrentWeatherCard from './CurrentWeatherCard';
import WeeklyWeather from './WeeklyWeather';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-slate-950">
      <header className="bg-white shadow">
        {/* Header content (if any) */}
      </header>

      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <CurrentWeatherCard />
        </div>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <WeeklyWeather />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

