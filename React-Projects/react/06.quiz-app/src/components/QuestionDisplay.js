import React from 'react';

const QuestionDisplay = ({ question, onAnswer }) => {
    return (
        <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">{question.text}</h3>
            <div className="flex flex-col space-y-2">
                {question.options.map((option, index) => (
                    <button
                        key={index}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => onAnswer(option)}
                    >
                        {option}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default QuestionDisplay;
