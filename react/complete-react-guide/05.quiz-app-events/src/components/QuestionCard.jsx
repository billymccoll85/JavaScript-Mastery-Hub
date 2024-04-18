import React, { useState } from 'react';

const QuestionCard = ({ question, handleAnswer }) => {
    // State to manage the currently selected option
    const [selectedOption, setSelectedOption] = useState('');

    // Handle option change
    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        handleAnswer(selectedOption);
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit}>
                <h2 className="text-lg font-semibold mb-4">{question.questionText}</h2>
                <div className="grid grid-cols-2 gap-4 mb-4">
                    {question.answers.map((answer, index) => (
                        <label key={index} className="flex items-center space-x-3">
                            <input
                                type="radio"
                                name="answer"
                                value={answer.text}
                                checked={selectedOption === answer.text}
                                onChange={handleOptionChange}
                                className="form-radio h-5 w-5 text-blue-600"
                            />
                            <span className="text-gray-700">{answer.text}</span>
                        </label>
                    ))}
                </div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Submit Answer
                </button>
            </form>
        </div>
    );
};

export default QuestionCard;
