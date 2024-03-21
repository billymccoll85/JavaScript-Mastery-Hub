import React, { useState } from "react"

// Define the Counter function component.
function Counter() {
    // Use the useState hook to create a 'count' state variable. 
    // The 'count' variable holds the current value of the counter, initialized to 0.
    // The 'setCount' function is used to update the 'count' value, triggering a re-render of the component.
    const [count, setCount] = useState(0);

    return (
        // Container for the Counter application with Tailwind CSS classes for styling.
        // Flexbox is used to center the content both vertically and horizontally on the screen.
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-2xl font-bold">Counter App</h1>
            {/* Display the current value of 'count'. This element re-renders every time the 'count' state changes. */}
            <h2>Current Count: {count}</h2>

            {/* Container for the buttons with spacing and margin styling. */}
            <div className="space-x-2 mt-4">
                {/* Increment Button: 
                    - On click, invokes the 'setCount' function, passing a callback that receives the current count and returns a new value incremented by 1.
                    - This demonstrates a basic user interaction leading to a state change. */}
                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors" 
                    onClick={() => setCount(count + 1)}>Increment</button>
                
                {/* Decrement Button: 
                    - On click, checks if 'count' is greater than 0 to prevent negative values.
                    - If true, invokes 'setCount' to decrement the count by 1.
                    - This conditional operation ensures that the count state is not reduced below 0, illustrating conditional rendering and state manipulation based on the current state. */}
                <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 transition-colors"
                    onClick={() => count > 0 ? setCount(count - 1) : null}>Decrement</button>
                
                {/* Reset Button: 
                    - On click, directly invokes 'setCount' with 0 to reset the count state to its initial value.
                    - This demonstrates state resetting to a known value, a common pattern for initializing or resetting application state. */}
                <button className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700 transition-colors"
                    onClick={() => setCount(0)}>Reset</button>
            </div>
        </div>
    );
}

export default Counter;
