import React, { createContext, useState, useEffect } from 'react';
import questionsData from '../data/questions.json';

export const QuizContext = createContext();

const shuffleQuestions = (array) => {
    const newArray = [...array];
    let currentIndex = newArray.length, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [newArray[currentIndex], newArray[randomIndex]] = [newArray[randomIndex], newArray[currentIndex]];
    }

    return newArray;
};

export const QuizProvider = ({ children }) => {

    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);
    const [score, setScore] = useState(0);
    const [quizCompleted, setQuizCompleted] = useState(false);

    useEffect(() => {
        const shuffledQuestions = shuffleQuestions(questionsData);
        setQuestions(shuffledQuestions);
        setQuestions(shuffledQuestions.slice(0, 30));
    }, []); // Empty dependency array to run only once

    return (
        <QuizContext.Provider value={{ 
            questions, 
            currentQuestionIndex, 
            setCurrentQuestionIndex, 
            userAnswers, 
            setUserAnswers, 
            score, 
            setScore, 
            quizCompleted, 
            setQuizCompleted 
        }}>
            {children}
        </QuizContext.Provider>
    );
};
