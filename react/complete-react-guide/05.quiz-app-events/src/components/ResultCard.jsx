import React from 'react';

const ResultCard = ({ question, userAnswer }) => {
    const isCorrect = question.answers.find(ans => ans.text === userAnswer)?.isCorrect;

    return (
        <div className={`p-4 my-4 rounded-lg text-white ${isCorrect ? 'bg-green-500' : 'bg-red-500'}`}>
            <h3 className="font-semibold">{question.questionText}</h3>
            <p>Your answer: {userAnswer}</p>
            <p>{isCorrect ? 'Correct' : 'Incorrect'}</p>
        </div>
    );
};

export default ResultCard;
