import React from 'react';

const ResultDisplay = ({ userAnswers, questions }) => {
    // Calculate score and render results
    const score = userAnswers.reduce((acc, answer, index) => {
        return acc + (answer === questions[index].correctAnswer ? 1 : 0);
    }, 0);

    return (
        <div>
            <h2>Your Score: {score}</h2>
            {questions.map((question, index) => (
                <div key={index}>
                    <p>{question.text}</p>
                    <p>Your Answer: {userAnswers[index]}</p>
                    <p>Correct Answer: {question.correctAnswer}</p>
                </div>
            ))}
        </div>
    );
};

export default ResultDisplay;
