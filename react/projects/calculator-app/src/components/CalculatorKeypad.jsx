import CalculatorKey from './CalculatorKey';

const CalculatorKeypad = ({ onKeyPress, onClear, onCalculate }) => {
    // This component represents the calculator keypad and handles user interactions.

    // Define the keys and their classes
    const keys = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, ".", "+", "-", "*", "/"];
    const operatorClass = "bg-orange-500";
    const numberClass = "bg-gray-700";

    return (
        <div className="grid grid-cols-4 gap-3 p-3">
            {/* Special keys */}
            <CalculatorKey keyValue="AC" onKeyPress={onClear} className="col-span-2 bg-gray-500" />
            <CalculatorKey keyValue="%" onKeyPress={onKeyPress} className="bg-gray-500" />

            {/* Operator and number keys */}
            <CalculatorKey keyValue="/" onKeyPress={onKeyPress} className={operatorClass} />
            {keys.map(key => (
                <CalculatorKey 
                    key={key} 
                    keyValue={key} 
                    onKeyPress={onKeyPress} 
                    className={isNaN(key) ? operatorClass : numberClass}
                />
            ))}

            {/* Calculate key */}
            <CalculatorKey keyValue="=" onKeyPress={onCalculate} className={operatorClass} />
        </div>
    );
};

export default CalculatorKeypad;

/* 
   Advice for implementing CalculatorKeypad:
   1. Component Purpose: This component represents the calculator keypad and is responsible for rendering the keys and handling user interactions.

   2. Props Usage: The component receives three callback props - 'onKeyPress' for handling key presses, 'onClear' for clearing the calculator input, and 'onCalculate' for performing calculations.

   3. Key Definitions: The 'keys' array defines the keys to be displayed on the keypad. It includes numbers, operators, and special keys.

   4. Styling Classes: The 'operatorClass' and 'numberClass' variables define CSS classes for operator and number keys, respectively. This separation makes it easy to style different types of keys.

   5. Grid Layout: The 'grid' layout is used to arrange the keys in a 4x4 grid. Grid layouts are commonly used for keypad-like components.

   6. Mapping Keys: The 'map' function is used to iterate through the 'keys' array and create 'CalculatorKey' components for each key. The 'key' prop is set to ensure React's efficient rendering.

   7. Key Classification: The 'isNaN' function is used to determine whether a key is a number or an operator. This helps in applying the correct styling class.

   8. Special Keys: Special keys like "AC" (clear) and "%" are given specific handling with appropriate classes and callbacks.

   9. Keep It Modular: By breaking down the keypad into smaller 'CalculatorKey' components, the code remains modular and easier to maintain.

   10. User Interaction: This component focuses on user interaction by providing callbacks for key presses, clearing, and calculation. Handling user interactions is a key aspect of building interactive UI components.
*/
