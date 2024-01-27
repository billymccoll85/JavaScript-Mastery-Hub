const CalculatorKey = ({ className, keyValue, onKeyPress }) => {
    // This functional component represents a single key in the calculator keypad.

    // Generate the CSS class for the button
    const buttonClass = `flex items-center justify-center h-16 w-16 md:h-20 md:w-20 rounded-full text-white text-2xl focus:outline-none ${className}`;

    return (
        <button 
            className={buttonClass}
            onClick={() => onKeyPress(keyValue)}
        >
            {/* The 'keyValue' prop received from the parent component is displayed on the button */}
            {keyValue}
        </button>
    );
};

export default CalculatorKey;

/* 
   Advice for implementing CalculatorKey:
   1. Component Purpose: This component represents an individual key/button in the calculator keypad, and its primary purpose is to display the key's value and handle user interactions.

   2. Props Usage: The component receives three props - 'className' for styling, 'keyValue' for displaying the key's value, and 'onKeyPress' for handling user clicks. Props allow customization and reusability of this component.

   3. CSS Styling: The 'buttonClass' variable generates a dynamic CSS class for the button, combining styles for size, color, and other attributes. This approach helps maintain consistent styling across keys.

   4. Event Handling: The 'onClick' event handler is used to trigger the 'onKeyPress' function with the 'keyValue' as its argument when the button is clicked. This allows for user interactions to be handled efficiently.

   5. Flexibility: By receiving 'className' and 'keyValue' as props, this component can be customized and reused for different keys in the calculator keypad.

   6. Focus Styles: The 'focus:outline-none' class is applied to remove the default outline when the button is focused. This helps improve the overall user experience and accessibility.

   7. Keep It Focused: The component's responsibility is to represent a key/button, keeping its functionality and rendering straightforward.
*/
