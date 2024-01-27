import { useState, useEffect } from 'react';

const useTimer = () => {
  // This custom hook manages timer state and logic.

  // Initialize state variables
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // Use 'useEffect' to start and stop the timer
  useEffect(() => {
    let interval;

    // Start the timer when 'isRunning' is true
    if (isRunning) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 1000);
      }, 1000);
    } else if (!isRunning && time !== 0) {
      // Stop the timer when 'isRunning' is false and time is not zero
      clearInterval(interval);
    }

    // Cleanup: Clear the interval when the component unmounts or when dependencies change
    return () => clearInterval(interval);
  }, [isRunning, time]);

  // Functions to start, stop, and reset the timer
  const startTimer = () => setIsRunning(true);
  const stopTimer = () => setIsRunning(false);
  const resetTimer = () => {
    setTime(0);
    setIsRunning(false);
  };

  // Return timer state and control functions
  return { time, isRunning, startTimer, stopTimer, resetTimer };
};

export default useTimer;

/* 
   Advice for useTimer custom hook:
   1. Custom Hook Purpose: The 'useTimer' custom hook encapsulates timer-related logic, providing an abstraction for managing timer state and actions.

   2. State Management: State variables 'time' and 'isRunning' are defined using the 'useState' hook. 'time' stores the elapsed time in milliseconds, and 'isRunning' indicates whether the timer is running.

   3. 'useEffect' for Timer: The 'useEffect' hook is used to start and stop the timer based on changes in 'isRunning' and 'time' state. It uses 'setInterval' to increment the time by 1000 milliseconds (1 second) when the timer is running.

   4. Cleanup in 'useEffect': A cleanup function is returned in the 'useEffect' to clear the interval when the component unmounts or when dependencies ('isRunning' and 'time') change.

   5. Control Functions: The 'startTimer', 'stopTimer', and 'resetTimer' functions are provided to control the timer's behavior. These functions are essential for user interactions.

   6. Clear and Readable: The code is clear and easy to read, making it straightforward to understand and maintain.

   7. Reusable and Modular: The custom hook can be reused in multiple components across your application, promoting code reusability and modularity.

   8. Hook Naming Convention: Following the 'use' prefix naming convention for custom hooks is a best practice in React development.

   9. Hook Dependency Array: The 'useEffect' dependency array includes 'isRunning' and 'time' to ensure that the effect is triggered when these values change.

   10. Abstraction: Custom hooks are a powerful way to abstract complex logic and state management, making components more focused and easier to test.
*/
