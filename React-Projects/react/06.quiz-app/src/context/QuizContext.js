import React, { createContext, useState } from 'react';

// Create Context
export const QuizContext = createContext();

// Provider Component
export const QuizProvider = ({ children }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);
    const [score, setScore] = useState(0);

    // Function to update the current question and store the user's answer
    const handleAnswer = (answer, isCorrect) => {
        // Update user answers array
        setUserAnswers([...userAnswers, answer]);

        // Update score if the answer is correct
        if (isCorrect) {
            setScore(score + 1);
        }

        // Move to the next question
        if (currentQuestionIndex < quizQuestions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    };

    return (
        <QuizContext.Provider value={{ 
            currentQuestionIndex, 
            setCurrentQuestionIndex, 
            userAnswers, 
            score, 
            handleAnswer 
        }}>
            {children}
        </QuizContext.Provider>
    );
};
