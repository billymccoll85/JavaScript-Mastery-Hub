import React from 'react';

const ResultDisplay = ({ userAnswers, questions, score }) => {
    return (
        <div className="result-container">
            <h2 className="score-heading">Your Score: {score}/{questions.length}</h2>
            <div className="questions-review">
                {questions.map((question, index) => (
                    <div key={index} className="question-review">
                        <p className="question-text">{question.text}</p>
                        <p className="user-answer">Your Answer: {userAnswers[index]}</p>
                        <p className="correct-answer">Correct Answer: {question.correctAnswer}</p>
                        {/* Optionally include explanation here */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ResultDisplay;
