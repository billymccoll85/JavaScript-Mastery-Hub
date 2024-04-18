import React, { useState } from 'react';
import QuestionCard from './QuestionCard'; // Importing the QuestionCard component
import NavigationButton from './NavigationButton'; // Importing the NavigationButton component

const QuizContainer = () => {
    // Example questions data structure
    const questions = [
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
        ]},
        { id: 11, questionText: "Which property is used to change the background color of an element?", answers: [
            { text: "background-color", isCorrect: true },
            { text: "bgcolor", isCorrect: false },
            { text: "color", isCorrect: false },
            { text: "background", isCorrect: false }
        ]},
        { id: 12, questionText: "What does CSS stand for?", answers: [
            { text: "Cascading Style Sheets", isCorrect: true },
            { text: "Creative Style Sheets", isCorrect: false },
            { text: "Computer Style Sheets", isCorrect: false },
            { text: "Colorful Style Sheets", isCorrect: false }
        ]},
        { id: 13, questionText: "How do you select an element with id 'demo' in CSS?", answers: [
            { text: "#demo", isCorrect: true },
            { text: ".demo", isCorrect: false },
            { text: "demo", isCorrect: false },
            { text: "*demo", isCorrect: false }
        ]},
        { id: 14, questionText: "Which HTML tag is used to define an internal style sheet?", answers: [
            { text: "<style>", isCorrect: true },
            { text: "<css>", isCorrect: false },
            { text: "<script>", isCorrect: false },
            { text: "<link>", isCorrect: false }
        ]},
        { id: 15, questionText: "What is the correct CSS syntax for making all the <p> elements bold?", answers: [
            { text: "p {font-weight:bold;}", isCorrect: true },
            { text: "p {text:bold;}", isCorrect: false },
            { text: "p {style:bold;}", isCorrect: false },
            { text: "p {bold:true;}", isCorrect: false }
        ]},
        { id: 16, questionText: "Which event occurs when the user clicks on an HTML element?", answers: [
            { text: "onchange", isCorrect: false },
            { text: "onmouseclick", isCorrect: false },
            { text: "onmouseover", isCorrect: false },
            { text: "onclick", isCorrect: true }
        ]},
        { id: 17, questionText: "How can you add a comment in a JavaScript?", answers: [
            { text: "//This is a comment", isCorrect: true },
            { text: "<!--This is a comment-->", isCorrect: false },
            { text: "'This is a comment", isCorrect: false },
            { text: "*/This is a comment/*", isCorrect: false }
        ]},
        { id: 18, questionText: "Which attribute specifies the URL of the image to use as a background for an element?", answers: [
            { text: "background", isCorrect: false },
            { text: "img", isCorrect: false },
            { text: "src", isCorrect: false },
            { text: "background-image", isCorrect: true }
        ]},
        { id: 19, questionText: "Which HTML attribute specifies the URL of the page the link goes to?", answers: [
            { text: "href", isCorrect: true },
            { text: "link", isCorrect: false },
            { text: "src", isCorrect: false },
            { text: "url", isCorrect: false }
        ]},
        { id: 20, questionText: "How do you declare a JavaScript variable?", answers: [
            { text: "v myVariable;", isCorrect: false },
            { text: "variable myVariable;", isCorrect: false },
            { text: "var myVariable;", isCorrect: true },
            { text: "myVariable = var;", isCorrect: false }
        ]}
    ];
    

    // State to track the current question index
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    // State to track user's answers: storing question ids and selected answer texts
    const [userAnswers, setUserAnswers] = useState([]);

    // Function to handle user's answer selection
    const handleAnswer = (answerText) => {
        const newAnswers = [...userAnswers, { questionId: questions[currentQuestionIndex].id, answerText }];
        setUserAnswers(newAnswers);

        // Move to the next question or do something else when the answer is selected
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            // All questions answered
            console.log('Quiz completed. Answers:', newAnswers);
            // Here you could navigate to a results component or handle the end of the quiz
        }
    };

    // Function to navigate to the next question
    const goToNext = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    };

    // Function to navigate to the previous question
    const goToPrevious = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    return (
        <div className="quiz-container">
            <h1>Quiz on Web Development</h1>
            {questions && questions.length > 0 && (
                <>
                    <QuestionCard
                        question={questions[currentQuestionIndex]}
                        handleAnswer={handleAnswer}
                    />
                    <NavigationButton
                        goToNext={goToNext}
                        goToPrevious={goToPrevious}
                        currentIndex={currentQuestionIndex}
                        totalQuestions={questions.length}
                    />
                </>
            )}
        </div>
    );
};

export default QuizContainer;
