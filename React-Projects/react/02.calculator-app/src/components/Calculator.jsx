import React, { useState } from 'react';
import { evaluate } from 'mathjs';
import CalculatorDisplay from './CalculatorDisplay';
import CalculatorKeypad from './CalculatorKeypad';

const Calculator = () => {
    // State to store the user input
    const [input, setInput] = useState('');

    // Function to handle key presses and update the input
    const handleKeyPress = (key) => {
        setInput(input + key);
    };

    // Function to calculate and update the input
    const handleCalculate = () => {
        try {
            setInput(evaluate(input).toString());
        } catch (error) {
            setInput("Error");
        }
    };

    // Function to clear the input
    const handleClear = () => {
        setInput('');
    };

    return (
        <div className="flex justify-center pt-10">
            <div className="bg-black p-5 rounded-2xl shadow-2xl">
                {/* Calculator display component to show the current input */}
                <CalculatorDisplay value={input || "0"} />
                
                {/* Calculator keypad component for user input */}
                <CalculatorKeypad 
                    onKeyPress={handleKeyPress} 
                    onClear={handleClear} 
                    onCalculate={handleCalculate} 
                />
            </div>
        </div>
    );
};

export default Calculator;

/* 
   Advice for implementing user interactions and state updates:
   1. State Management: The 'useState' hook is used to manage the 'input' state, which stores the user's input for calculations.

   2. User Input Handling: The 'handleKeyPress' function is responsible for updating the 'input' state when a key is pressed. It appends the key to the existing input.

   3. Calculation: The 'handleCalculate' function is used to perform calculations based on the user's input. It utilizes the 'evaluate' function from the 'mathjs' library and updates the 'input' state with the result. If an error occurs during calculation, it displays an "Error" message.

   4. Clearing Input: The 'handleClear' function clears the 'input' state when the user wants to start a new calculation.

   5. Component Composition: The 'Calculator' component composes 'CalculatorDisplay' and 'CalculatorKeypad' components to create a complete calculator interface. This promotes code organization and reusability.

   6. User Interface: Styling and user interface elements like rounded corners and shadows are applied to enhance the calculator's appearance.

   7. Testing and Validation: When implementing user interactions involving calculations, it's important to thoroughly test and handle potential errors to provide a smooth user experience.
*/
