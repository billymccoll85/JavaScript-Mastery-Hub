import React from 'react';

const TimerControls = ({ isRunning, startTimer, stopTimer, resetTimer }) => {
  return (
    <div className="space-x-4 mt-6">
      {!isRunning && (
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={startTimer}>
          Start
        </button>
      )}
      {isRunning && (
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={stopTimer}>
          Stop
        </button>
      )}
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={resetTimer}>
        Reset
      </button>
    </div>
  );
};

export default TimerControls;
