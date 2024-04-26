import React, { useState, useEffect, useMemo } from 'react';
import QuestionCard from './QuestionCard';
import NavigationButton from './NavigationButton';
import ResultCard from './ResultCard';

const QuizContainer = () => {
    // useMemo to initialize questions array
    const questions = useMemo(() => [
        // Array containing the quiz questions and their respective answers
        // Each question object contains an id, questionText, and an array of answers
        // Each answer object contains text and a boolean indicating if it's correct
        // Example question object: { id: 1, questionText: "What does HTML stand for?", answers: [ ... ] }
    ], []);

    // State variables
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Track the index of the current question
    const [userAnswers, setUserAnswers] = useState([]); // Track user's answers
    const [score, setScore] = useState(0); // Track the user's score
    const [quizFinished, setQuizFinished] = useState(false); // Track if the quiz is finished

    // Calculate the score when the quiz is finished
    useEffect(() => {
        if (quizFinished) {
            const newScore = userAnswers.reduce((acc, answer) => {
                // Iterate through user's answers to calculate the score
                const question = questions.find(q => q.id === answer.questionId);
                const correctAnswer = question.answers.find(a => a.isCorrect).text;
                return acc + (answer.answerText === correctAnswer ? 1 : 0);
            }, 0);
            setScore(newScore); // Update the score
        }
    }, [userAnswers, questions, quizFinished]);

    // Handle user's answer selection
    const handleAnswerSelection = (answerText) => {
        const newAnswers = [...userAnswers, { questionId: questions[currentQuestionIndex].id, answerText }];
        setUserAnswers(newAnswers); // Update the user's answers array

        // Automatically move to the next question if not the last one
        const nextQuestionIndex = currentQuestionIndex + 1;
        if (nextQuestionIndex < questions.length) {
            setCurrentQuestionIndex(nextQuestionIndex); // Move to the next question
        } else {
            setQuizFinished(true); // Mark the quiz as finished
        }
    };

    // Function to navigate to the next question
    const goToNext = () => {
        const nextQuestionIndex = currentQuestionIndex + 1;
        if (nextQuestionIndex < questions.length) {
            setCurrentQuestionIndex(nextQuestionIndex); // Move to the next question
        }
    };

    // Function to navigate to the previous question
    const goToPrevious = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1); // Move to the previous question
        }
    };

    return (
        <div className="container my-20 mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col justify-center items-center">
            <h1 className="text-2xl font-bold text-center mb-6">Quiz on Web Development</h1>
            {!quizFinished ? (
                // Render question card and navigation buttons if the quiz is not finished
                <div className="w-full max-w-4xl">
                    <QuestionCard
                        question={questions[currentQuestionIndex]}
                        handleAnswer={handleAnswerSelection}
                    />
                    <NavigationButton
                        goToNext={goToNext}
                        goToPrevious={goToPrevious}
                        currentIndex={currentQuestionIndex}
                        totalQuestions={questions.length}
                    />
                    <p className="text-sm mb-2 text-center">
                        Question {currentQuestionIndex + 1} of {questions.length}
                    </p>
                </div>
            ) : (
                // Render result cards and score if the quiz is finished
                <div className="w-full max-w-4xl">
                    {questions.map((question, index) => (
                        <ResultCard
                            key={question.id}
                            question={question}
                            userAnswer={userAnswers.find(answer => answer.questionId === question.id)?.answerText}
                        />
                    ))}
                    <div className="score mt-4 text-center">
                        Your score: {score} / {questions.length}
                    </div>
                </div>
            )}
        </div>
    );
};

export default QuizContainer;
