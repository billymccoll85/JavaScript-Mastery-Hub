import React from 'react';

const QuestionDisplay = ({ question, onAnswer }) => {
    return (
        <div className="question-container">
            <h3 className="question-text">{question.text}</h3>
            <div className="options-container">
                {question.options.map((option, index) => (
                    <button
                        key={index}
                        className="option-button"
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
