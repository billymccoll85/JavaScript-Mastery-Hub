import React from 'react';

const QuestionDisplay = ({ question, onAnswer }) => {
    return (
        <div>
            <h2>{question.text}</h2>
            <div>
                {question.options.map((option, index) => (
                    <button key={index} onClick={() => onAnswer(option)}>
                        {option}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default QuestionDisplay;
