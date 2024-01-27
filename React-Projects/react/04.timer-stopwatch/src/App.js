import React from 'react';
import TimerDisplay from './components/TimerDisplay';
import TimerControls from './components/TimerControls';
import useTimer from './hooks/useTimer';

function App() {
  // This is the root component of the application.

  // Using the 'useTimer' custom hook to manage timer state and actions
  const { time, isRunning, startTimer, stopTimer, resetTimer } = useTimer();

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="text-center">
        {/* TimerDisplay component for displaying formatted time */}
        <TimerDisplay time={time} />

        {/* TimerControls component for managing timer actions */}
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

/* 
   Advice for the App component:
   1. Root Component: The 'App' component is typically the root component of a React application. It serves as the entry point for rendering the user interface.

   2. Custom Hook Usage: The 'useTimer' custom hook is used to manage timer-related state and actions. This demonstrates the power of custom hooks in abstracting complex logic.

   3. Component Composition: The 'TimerDisplay' and 'TimerControls' components are composed within the 'App' component. This promotes a modular and component-based architecture.

   4. Prop Passing: Props are passed to child components ('time', 'isRunning', 'startTimer', 'stopTimer', 'resetTimer') to share data and functionalities.

   5. Styling and Layout: The use of CSS classes and flex layout provides a visually appealing and centered user interface.

   6. Component Structure: The 'App' component focuses on structuring the layout and composing child components. It doesn't contain complex logic but coordinates the rendering of other components.

   7. Separation of Concerns: Each component ('TimerDisplay', 'TimerControls') has a clear responsibility, promoting separation of concerns and maintainability.

   8. Reusable Components: 'TimerDisplay' and 'TimerControls' are reusable components that can be used in other parts of your application.

   9. Hook Naming Convention: The 'useTimer' hook follows the naming convention with the 'use' prefix for custom hooks.

   10. Clean and Readable: The code is clean, well-organized, and easy to read, making it understandable and maintainable.

   11. Component Hierarchy: Understanding the hierarchy of components and their relationships is crucial when building React applications. The 'App' component orchestrates the rendering of child components.
*/
