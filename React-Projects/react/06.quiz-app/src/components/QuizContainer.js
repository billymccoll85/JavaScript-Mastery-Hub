import React, { useContext } from 'react';
import { QuizContext } from '../context/QuizContext';
import QuestionDisplay from './QuestionDisplay';
import ResultDisplay from './ResultDisplay';

const QuizContainer = () => {


    return (
        <div className="container mx-auto p-4">
            {!quizCompleted ? (
                <div className="flex flex-col items-center">
                    <QuestionDisplay 
                        question={questions[currentQuestionIndex]} 
                        handleAnswer={handleAnswer} 
                    />
                </div>
            ) : (
                <ResultDisplay />
            )}
        </div>
    );
};

export default QuizContainer;
