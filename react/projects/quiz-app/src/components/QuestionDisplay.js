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
        <form onSubmit={handleSubmit} className="p-4 bg-slate-900 shadow-md rounded-xl w-1/2">
            <h2 className="text-3xl font-bold mb-8 pt-8">Question {questionNumber}: {question.text}</h2>
            <div className="p-4">
                {question.options.map((option, index) => (
                    <label key={index} className="flex items-center space-x-2">
                        <input 
                            type="radio"
                            name="questionOption"
                            value={option}
                            onChange={(e) => setSelectedOption(e.target.value)}
                            className="form-radio h-5 w-5 text-blue-600"
                        />
                        <span className="text-md text-left">{option}</span>
                    </label>
                ))}
            </div>
            <button type="submit" className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
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
