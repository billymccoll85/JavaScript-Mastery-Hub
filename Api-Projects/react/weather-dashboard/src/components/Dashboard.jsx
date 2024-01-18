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
        <div className="container mx-auto">
          <div className="flex flex-row p-8 justify-around">
            <div className="basis-1/7">
              <div>
                <CurrentWeatherCard />
              </div>
            </div>
            <div className="basis-3/5">
              <div>
                <WeeklyWeather />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

