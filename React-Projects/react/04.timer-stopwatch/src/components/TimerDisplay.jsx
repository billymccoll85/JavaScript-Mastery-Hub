import React from 'react';

const TimerDisplay = ({ time }) => {
  // This component displays the formatted time.

  // Formatting time for display
  const formatTime = () => {
    // Calculate seconds, minutes, and hours
    const getSeconds = `0${(time / 1000) % 60}`.slice(-2);
    const minutes = `${Math.floor(time / 60000)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(time / 3600000)}`.slice(-2);

    // Format the time as HH : MM : SS
    return `${getHours} : ${getMinutes} : ${getSeconds}`;
  };

  return (
    <div className="text-4xl font-bold text-gray-700">
      {/* Display the formatted time */}
      {formatTime()}
    </div>
  );
};

export default TimerDisplay;

/* 
   Advice for TimerDisplay component:
   1. Component Purpose: The 'TimerDisplay' component is responsible for displaying the formatted time. It's a presentational component that focuses on rendering.

   2. Props Usage: The component receives a 'time' prop, which is used to display the time. This makes the component flexible and reusable as it can display different times based on the 'time' prop.

   3. Time Formatting: The 'formatTime' function is used to format the time in hours, minutes, and seconds. It's a common practice to separate formatting logic into functions for better code organization.

   4. Displaying Time: The formatted time is displayed within a 'div' element. The use of the 'text-4xl', 'font-bold', and 'text-gray-700' classes applies styling to the displayed time.

   5. Keep It Focused: This component's primary responsibility is to format and display time. It avoids complex logic and maintains a clear focus on its purpose.

   6. Reusability: The 'TimerDisplay' component can be reused in various parts of your application where formatted time needs to be displayed. This promotes code reusability.

   7. Separation of Concerns: By separating the formatting logic into a function ('formatTime'), the component remains clean and easier to maintain. This separation of concerns is a good practice in React development.
*/
