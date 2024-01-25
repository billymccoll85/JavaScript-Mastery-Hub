import React, { useState } from 'react';
import { evaluate } from 'mathjs';
import CalculatorDisplay from './CalculatorDisplay';
import CalculatorKeypad from './CalculatorKeypad';

const Calculator = () => {
    const [input, setInput] = useState('');

    const handleKeyPress = (key) => {
        setInput(input + key);
    };

    const handleCalculate = () => {
        try {
            setInput(evaluate(input).toString());
        } catch (error) {
            setInput("Error");
        }
    };

    const handleClear = () => {
        setInput('');
    };

    return (
        <div className="flex justify-center pt-10">
            <div className="bg-black p-5 rounded-2xl shadow-2xl">
                <CalculatorDisplay value={input || "0"} />
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
