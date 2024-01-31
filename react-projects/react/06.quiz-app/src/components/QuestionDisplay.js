import React, { useState } from 'react';
import PropTypes from 'prop-types';

const QuestionDisplay = ({ question, handleAnswer, questionNumber }) => {
    const [selectedOption, setSelectedOption] = useState('');

    if (!question || !question.options) return <p>Question data is missing.</p>;

    const handleSubmit = (event) => {
        event.preventDefault();
        handleAnswer(selectedOption);
    };

    return (
        <form onSubmit={handleSubmit} className="p-4">
            <h2 className="text-xl font-bold mb-4">Question {questionNumber}: {question.text}</h2>
            <div className="flex flex-col space-y-2">
                {question.options.map((option, index) => (
                    <label key={index}>
                        <input 
                            type="radio"
                            name="questionOption"
                            value={option}
                            onChange={(e) => setSelectedOption(e.target.value)}
                            className="mr-2"
                        />
                        {option}
                    </label>
                ))}
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                Submit Answer
            </button>
        </form>
    );
};

QuestionDisplay.propTypes = {
    question: PropTypes.shape({
        text: PropTypes.string.isRequired,
        options: PropTypes.arrayOf(PropTypes.string).isRequired,
    }),
    handleAnswer: PropTypes.func.isRequired,
    questionNumber: PropTypes.number.isRequired,
};

export default QuestionDisplay;
