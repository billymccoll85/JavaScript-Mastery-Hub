import React, { useState, useContext } from 'react';
import QuestionDisplay from './QuestionDisplay';
import ResultDisplay from './ResultDisplay';
import { QuizContext } from '../context/QuizContext';

const QuizContainer = () => {
    const { questions, currentQuestionIndex, setCurrentQuestionIndex, userAnswers, setUserAnswers } = useContext(QuizContext);
    const [quizCompleted, setQuizCompleted] = useState(false);

    const handleAnswer = (answer) => {
        // Store user's answer and move to next question
        setUserAnswers([...userAnswers, answer]);
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setQuizCompleted(true);
        }
    };

    return (
        <div>
            {!quizCompleted ? (
                <QuestionDisplay question={questions[currentQuestionIndex]} onAnswer={handleAnswer} />
            ) : (
                <ResultDisplay userAnswers={userAnswers} questions={questions} />
            )}
        </div>
    );
};

export default QuizContainer;
