import React from 'react';
import TimerDisplay from './components/TimerDisplay';
import TimerControls from './components/TimerControls';
import useTimer from './hooks/useTimer';

function App() {
  const { time, isRunning, startTimer, stopTimer, resetTimer } = useTimer();

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="text-center">
        <TimerDisplay time={time} />
        <TimerControls
          isRunning={isRunning}
          startTimer={startTimer}
          stopTimer={stopTimer}
          resetTimer={resetTimer}
        />
      </div>
    </div>
  );
}

export default App;
