import React from 'react';

const ResultCard = ({ question, userAnswer }) => {
    // Check if the user's answer is correct
    const isCorrect = question.answers.find(ans => ans.text === userAnswer)?.isCorrect;

    return (
        <div className={`p-4 my-4 rounded-lg text-white ${isCorrect ? 'bg-green-500' : 'bg-red-500'}`}>
            {/* Display the question text */}
            <h3 className="font-semibold">{question.questionText}</h3>
            {/* Display the user's answer */}
            <p>Your answer: {userAnswer}</p>
            {/* Display if the answer is correct or incorrect */}
            <p>{isCorrect ? 'Correct' : 'Incorrect'}</p>
        </div>
    );
};

export default ResultCard;
