import React from 'react';
import PropTypes from 'prop-types';

const QuestionDisplay = ({ question, handleAnswer }) => {
    if (!question || !question.options) return <p>Question data is missing.</p>;

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">{question.text}</h2>
            <div className="flex flex-col space-y-2">
                {question.options.map((option, index) => (
                    <button
                        key={option.id || index} // Assuming each option has a unique 'id'
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => handleAnswer(option)}
                        aria-label={`Option ${option}`}
                    >
                        {option}
                    </button>
                ))}
            </div>
        </div>
    );
};

QuestionDisplay.propTypes = {
    question: PropTypes.shape({
        text: PropTypes.string.isRequired,
        options: PropTypes.arrayOf(PropTypes.string).isRequired,
    }),
    handleAnswer: PropTypes.func.isRequired,
};

export default QuestionDisplay;
