import React, { useState, useEffect, useMemo } from 'react';
import QuestionCard from './QuestionCard';
import NavigationButton from './NavigationButton';
import ResultCard from './ResultCard';

const QuizContainer = () => {
    // useMemo to initialize questions array
    const questions = useMemo(() => [
        { id: 1, questionText: "What does HTML stand for?", answers: [
            { text: "Hyper Text Markup Language", isCorrect: true },
            { text: "Home Tool Markup Language", isCorrect: false },
            { text: "Hyperlinks and Text Markup Language", isCorrect: false },
            { text: "Hyper Tool Multi Language", isCorrect: false }
        ]},
        { id: 2, questionText: "Which language runs in a web browser?", answers: [
            { text: "Java", isCorrect: false },
            { text: "C", isCorrect: false },
            { text: "Python", isCorrect: false },
            { text: "JavaScript", isCorrect: true }
        ]},
        { id: 3, questionText: "What is the correct HTML element for the largest heading?", answers: [
            { text: "<h1>", isCorrect: true },
            { text: "<heading>", isCorrect: false },
            { text: "<head>", isCorrect: false },
            { text: "<h6>", isCorrect: false }
        ]},
        { id: 4, questionText: "Which CSS property is used to change the text color of an element?", answers: [
            { text: "color", isCorrect: true },
            { text: "font-color", isCorrect: false },
            { text: "text-color", isCorrect: false },
            { text: "foreground-color", isCorrect: false }
        ]},
        { id: 5, questionText: "Inside which HTML element do we put the JavaScript?", answers: [
            { text: "<js>", isCorrect: false },
            { text: "<javascript>", isCorrect: false },
            { text: "<script>", isCorrect: true },
            { text: "<code>", isCorrect: false }
        ]},
        { id: 6, questionText: "Which CSS property is used to control the spacing between lines of text?", answers: [
            { text: "line-height", isCorrect: true },
            { text: "spacing", isCorrect: false },
            { text: "letter-spacing", isCorrect: false },
            { text: "text-spacing", isCorrect: false }
        ]},
        { id: 7, questionText: "What is the correct JavaScript syntax to change the content of an HTML element?", answers: [
            { text: "document.getElementById('demo').innerHTML = 'Hello World!';", isCorrect: true },
            { text: "#demo.innerHTML = 'Hello World!';", isCorrect: false },
            { text: "document.getElementByName('demo').innerHTML = 'Hello World!';", isCorrect: false },
            { text: "document.getElement('demo').innerHTML = 'Hello World!';", isCorrect: false }
        ]},
        { id: 8, questionText: "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?", answers: [
            { text: "title", isCorrect: false },
            { text: "src", isCorrect: false },
            { text: "alt", isCorrect: true },
            { text: "href", isCorrect: false }
        ]},
        { id: 9, questionText: "How do you create a function in JavaScript?", answers: [
            { text: "function:myFunction()", isCorrect: false },
            { text: "function = myFunction()", isCorrect: false },
            { text: "function myFunction()", isCorrect: true },
            { text: "myFunction():function", isCorrect: false }
        ]},
        { id: 10, questionText: "How do you call a function named 'myFunction'?", answers: [
            { text: "myFunction()", isCorrect: true },
            { text: "call myFunction()", isCorrect: false },
            { text: "call function myFunction()", isCorrect: false },
            { text: "run myFunction()", isCorrect: false }
        ]}

    ], []);

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);
    const [score, setScore] = useState(0);
    const [quizFinished, setQuizFinished] = useState(false);

    // Calculate the score
    useEffect(() => {
        if (quizFinished) {
            const newScore = userAnswers.reduce((acc, answer) => {
                const question = questions.find(q => q.id === answer.questionId);
                const correctAnswer = question.answers.find(a => a.isCorrect).text;
                return acc + (answer.answerText === correctAnswer ? 1 : 0);
            }, 0);
            setScore(newScore);
        }
    }, [userAnswers, questions, quizFinished]);

    const handleAnswerSelection = (answerText) => {
        const newAnswers = [...userAnswers, { questionId: questions[currentQuestionIndex].id, answerText }];
        setUserAnswers(newAnswers);

        // Automatically move to the next question if not the last one
        const nextQuestionIndex = currentQuestionIndex + 1;
        if (nextQuestionIndex < questions.length) {
            setCurrentQuestionIndex(nextQuestionIndex);
        } else {
            setQuizFinished(true); // Mark the quiz as finished
        }
    };

    const goToNext = () => {
        const nextQuestionIndex = currentQuestionIndex + 1;
        if (nextQuestionIndex < questions.length) {
            setCurrentQuestionIndex(nextQuestionIndex);
        }
    };

    const goToPrevious = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    return (
        <div className="container my-20 mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col justify-center items-center">
            <h1 className="text-2xl font-bold text-center mb-6">Quiz on Web Development</h1>
            {!quizFinished ? (
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