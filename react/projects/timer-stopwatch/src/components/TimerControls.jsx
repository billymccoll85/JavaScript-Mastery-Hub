import React from 'react';

const TimerControls = ({ isRunning, startTimer, stopTimer, resetTimer }) => {
  // This component handles timer controls and demonstrates lifecycle events with hooks.

  return (
    <div className="space-x-4 mt-6">
      {!isRunning && (
        // Start button is shown when the timer is not running
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={startTimer}>
          Start
        </button>
      )}
      {isRunning && (
        // Stop button is shown when the timer is running
        <button
          className="bg-red-500 hover.bg-red-700 text-white font-bold py-2 px-4 rounded"
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

/* 
   Advice for understanding lifecycle events in React with hooks:
   1. Component Purpose: The 'TimerControls' component manages the controls (Start, Stop, Reset) for a timer. It serves as a part of a timer-related feature in your application.

   2. Props Usage: The component receives props such as 'isRunning', 'startTimer', 'stopTimer', and 'resetTimer' to control the timer's behavior. These props are essential for handling the timer's state.

   3. Conditional Rendering: The 'isRunning' prop is used to conditionally render the 'Start' or 'Stop' button based on the timer's state. This is a common use case in React to provide dynamic user interfaces.

   4. Event Handling: Event handlers like 'onClick' are used to trigger specific actions when the buttons are clicked. These handlers control the timer's behavior.

   5. Lifecycle Events: While this component does not explicitly demonstrate lifecycle events, it is a functional component that primarily utilizes React hooks, such as 'useState' and 'useEffect', to manage state and side effects. Lifecycle events in React with hooks can be managed in functional components using 'useEffect' for scenarios like data fetching, timers, or other side effects.

   6. Reusability: The 'TimerControls' component can be reused in various parts of your application where timer controls are needed. This reusability is a strength of component-based architecture.

   7. Component Focus: While this component doesn't directly demonstrate lifecycle events, it focuses on user interactions and state management, which are essential aspects of building interactive applications with React.
*/
