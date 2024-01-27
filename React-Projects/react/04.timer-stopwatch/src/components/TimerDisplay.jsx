import React from 'react';

const TimerDisplay = ({ time }) => {
  // Formatting time for display
  const formatTime = () => {
    const getSeconds = `0${(time / 1000) % 60}`.slice(-2);
    const minutes = `${Math.floor(time / 60000)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(time / 3600000)}`.slice(-2);

    return `${getHours} : ${getMinutes} : ${getSeconds}`;
  };

  return (
    <div className="text-4xl font-bold text-gray-700">
      {formatTime()}
    </div>
  );
};

export default TimerDisplay;
