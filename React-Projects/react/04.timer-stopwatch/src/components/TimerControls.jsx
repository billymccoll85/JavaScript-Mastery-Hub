import React from 'react';

const TimerControls = ({ isRunning, startTimer, stopTimer, resetTimer }) => {
  return (
    <div className="buttons">
      {!isRunning && <button onClick={startTimer}>Start</button>}
      {isRunning && <button onClick={stopTimer}>Stop</button>}
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default TimerControls;
