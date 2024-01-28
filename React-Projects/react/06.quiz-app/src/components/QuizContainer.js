import React, { useState, useEffect } from 'react';
import QuestionDisplay from './QuestionDisplay';
import ResultDisplay from './ResultDisplay';
import quizQuestions from '../data/quizQuestions'; // Assuming quiz questions are stored here

const QuizContainer = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);
    const [score, setScore] = useState(0);
    const [quizCompleted, setQuizCompleted] = useState(false);

    const handleAnswer = (selectedOption) => {
        // Logic to update the score if the answer is correct
        const correctAnswer = quizQuestions[currentQuestionIndex].correctAnswer;
        if (selectedOption === correctAnswer) {
            setScore(score + 1);
        }

        // Move to the next question or end the quiz
        if (currentQuestionIndex < quizQuestions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setUserAnswers([...userAnswers, selectedOption]);
        } else {
            setQuizCompleted(true);
            setUserAnswers([...userAnswers, selectedOption]);
        }
    };

    return (
        <div>
            {!quizCompleted ? (
                <div>
                    <h2>Question {currentQuestionIndex + 1} of {quizQuestions.length}</h2>
                    <QuestionDisplay 
                        question={quizQuestions[currentQuestionIndex]} 
                        onAnswer={handleAnswer} 
                    />
                </div>
            ) : (
                <ResultDisplay 
                    userAnswers={userAnswers} 
                    questions={quizQuestions} 
                    score={score} 
                />
            )}
        </div>
    );
};

export default QuizContainer;
