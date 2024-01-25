import CalculatorKey from './CalculatorKey';

const CalculatorKeypad = ({ onKeyPress, onClear, onCalculate }) => {
    const keys = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, ".", "+", "-", "*", "/"];

    return (
        <div className="grid grid-cols-5 gap-2">
            <button onClick={onClear} className="col-span-4 bg-red-500 text-white p-2 rounded">Clear</button>
            {keys.map(key => (
                <CalculatorKey 
                    key={key} 
                    keyValue={key} 
                    onKeyPress={onKeyPress} 
                    className={isNaN(key) ? "bg-blue-200" : "bg-blue-100"}
                />
            ))}
            <button onClick={onCalculate} className="col-span-2 bg-green-500 text-white p-2 rounded">=</button>
        </div>
    );
};

export default CalculatorKeypad;
