// Importing necessary modules
import React from 'react';
import TimerDisplay from './TimerDisplay';
import TimerControls from './TimerControls';
import useTimer from './useTimer';
import './index.css';

function App() {
  const { time, isRunning, startTimer, stopTimer, resetTimer } = useTimer();

  return (
    <div className="app">
      <TimerDisplay time={time} />
      <TimerControls
        isRunning={isRunning}
        startTimer={startTimer}
        stopTimer={stopTimer}
        resetTimer={resetTimer}
      />
    </div>
  );
}

export default App;
