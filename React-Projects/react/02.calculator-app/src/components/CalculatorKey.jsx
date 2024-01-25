const CalculatorKey = ({ className, keyValue, onKeyPress }) => {
    return (
        <button 
            className={`bg-blue-100 p-4 rounded ${className}`}
            onClick={() => onKeyPress(keyValue)}
        >
            {keyValue}
        </button>
    );
};

export default CalculatorKey;
