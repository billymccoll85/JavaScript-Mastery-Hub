import React from 'react';

const QuestionDisplay = ({ question, handleAnswer }) => {
    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">{question.text}</h2>
            <div className="flex flex-col space-y-2">
                {question.options.map((option, index) => (
                    <button
                        key={index}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => handleAnswer(option)}
                    >
                        {option}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default QuestionDisplay;
