import CalculatorKey from './CalculatorKey';

const CalculatorKeypad = ({ onKeyPress, onClear, onCalculate }) => {
    const keys = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, ".", "+", "-", "*", "/"];
    const operatorClass = "bg-orange-500";
    const numberClass = "bg-gray-700";

    return (
        <div className="grid grid-cols-4 gap-3 p-3">
            <CalculatorKey keyValue="AC" onKeyPress={onClear} className="col-span-2 bg-gray-500" />
            <CalculatorKey keyValue="%" onKeyPress={onKeyPress} className="bg-gray-500" />
            <CalculatorKey keyValue="/" onKeyPress={onKeyPress} className={operatorClass} />
            {keys.map(key => (
                <CalculatorKey 
                    key={key} 
                    keyValue={key} 
                    onKeyPress={onKeyPress} 
                    className={isNaN(key) ? operatorClass : numberClass}
                />
            ))}
            <CalculatorKey keyValue="=" onKeyPress={onCalculate} className={operatorClass} />
        </div>
    );
};

export default CalculatorKeypad;
