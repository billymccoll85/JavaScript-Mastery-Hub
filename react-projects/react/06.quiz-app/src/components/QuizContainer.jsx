import React, { useContext } from 'react';
import { QuizContext } from '../context/QuizContext';
import QuestionDisplay from './QuestionDispla';
import ResultDisplay from './ResultsDisplay.jsx';

const QuizContainer = () => {
    const {
        questions,
        currentQuestionIndex,
        setUserAnswers,
        userAnswers,
        score,
        setScore,
        quizCompleted,
        setQuizCompleted,
    } = useContext(QuizContext);

    const handleAnswer = (selectedOption) => {
        const correctAnswer = questions[currentQuestionIndex].correctAnswer;
        setUserAnswers([...userAnswers, selectedOption]);

        if (selectedOption === correctAnswer) {
            setScore((prevScore) => prevScore + 1);
        }

        setQuizCompleted(currentQuestionIndex >= questions.length - 1);
    }; 

    return (
        <div className="container mx-auto p-4">
            {!quizCompleted ? (
                <QuestionDisplay 
                    question={questions[currentQuestionIndex]} 
                    handleAnswer={handleAnswer} 
                />
            ) : (
                <ResultDisplay score={score} totalQuestions={questions.length} />
            )}
        </div>
    );
};

export default QuizContainer;
