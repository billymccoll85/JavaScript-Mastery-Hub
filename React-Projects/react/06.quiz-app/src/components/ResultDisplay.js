import React, { useContext } from 'react';
import { QuizContext } from '../context/QuizContext';

const ResultDisplay = () => {

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Your Score: {score}/{questions.length}</h2>
            <div className="space-y-4">
                {questions.map((question, index) => (
                    <div key={index} className="border p-4 rounded">
                        <p className="text-lg font-semibold">{question.text}</p>
                        <p className="text-md">Your Answer: {userAnswers[index]}</p>
                        <p className="text-md">Correct Answer: {question.correctAnswer}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ResultDisplay;
