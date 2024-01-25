const CalculatorKey = ({ className, keyValue, onKeyPress }) => {
    const buttonClass = `flex items-center justify-center h-16 w-16 md:h-20 md:w-20 rounded-full text-white text-2xl focus:outline-none ${className}`;

    return (
        <button 
            className={buttonClass}
            onClick={() => onKeyPress(keyValue)}
        >
            {keyValue}
        </button>
    );
};

export default CalculatorKey;
