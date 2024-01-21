import React from 'react';
import CurrentWeatherCard from './CurrentWeatherCard';
import WeeklyWeather from './WeeklyWeather';
import CitySelector from './CitySelector'; // Import CitySelector
import HourlyForecast from './HourlyWeather';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-slate-950">
      <main>
        <div className="container mx-auto">
          <div className='flex justify-center py-8'>
              <CitySelector />
          </div>
          <div className="flex flex-row p-8 justify-center">
            <div className="basis-1/3">
              <div className='mr-8 ml-0'>
                <CurrentWeatherCard />
              </div>
            </div>
            <div className="basis-1/2">
              <div>
                <WeeklyWeather />
              </div>
            </div>
          </div>
          <div className='mx-auto w-10/12 pb-40'>
            <HourlyForecast />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
