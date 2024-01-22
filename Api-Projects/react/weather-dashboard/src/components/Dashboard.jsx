import React from 'react';
import { LoadingProvider, useLoading } from '../context/LoadingContext';
import CurrentWeatherCard from './CurrentWeatherCard';
import WeeklyWeather from './WeeklyWeather';
import CitySelector from './CitySelector';
import HourlyForecast from './HourlyWeather';

const DashboardContent = () => {
  const { isLoading } = useLoading();

  if (isLoading) {
    return (
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-25">
        <div className="loader text-white">
          <svg className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent" viewBox="0 0 24 24"></svg>
          <span className="ml-2"></span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950">
      <main>
        <div className="container mx-auto p-4">
          <div className='flex flex-col sm:flex-row justify-center py-8 gap-4'> {/* Adjusted for stacking on mobile */}
            <CitySelector className="w-full sm:w-auto"/> {/* Full width on mobile */}
            {/* Add your buttons here, ensure they have className="w-full sm:w-auto" */}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
            <div className="col-span-1">
              <CurrentWeatherCard />
            </div>
            <div className="col-span-1 md:col-span-2 lg:col-span-1">
              <WeeklyWeather />
            </div>
          </div>
          <div className='mx-auto w-full md:w-10/12 pb-40'>
            <HourlyForecast />
          </div>
        </div>
      </main>
    </div>
  );
};

const Dashboard = () => {
  return (
    <LoadingProvider>
      <DashboardContent />
    </LoadingProvider>
  );
};

export default Dashboard;
