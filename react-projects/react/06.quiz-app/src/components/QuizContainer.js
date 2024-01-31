import React, { useContext } from 'react';
import { QuizContext } from '../context/QuizContext';
import QuestionDisplay from './QuestionDisplay';
import ResultDisplay from './ResultDisplay';

const QuizContainer = () => {
    const {
        questions,
        currentQuestionIndex,
        setCurrentQuestionIndex,
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
    
        const nextQuestionIndex = currentQuestionIndex + 1;
        if (nextQuestionIndex < questions.length) {
            setCurrentQuestionIndex(nextQuestionIndex);
        } else {
            setQuizCompleted(true);
        }
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
