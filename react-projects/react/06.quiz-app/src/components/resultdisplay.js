import React, { useContext } from 'react';
import { QuizContext } from '../context/QuizContext';

const ResultDisplay = () => {
    const { userAnswers, questions, score } = useContext(QuizContext);

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Your Score: {score}/{questions.length}</h2>
            <div className="space-y-4">
                {questions.map((question, index) => (
                    <div key={question.id || index} className="border p-4 rounded"> {/* Use question ID if available */}
                        <p className="text-lg font-semibold">{question.text}</p>
                        <p className="text-md">Your Answer: {userAnswers[index] || 'No answer'}</p>
                        <p className={`text-md ${userAnswers[index] === question.correctAnswer ? 'text-green-500' : 'text-red-500'}`}>
                            Correct Answer: {question.correctAnswer}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ResultDisplay;
