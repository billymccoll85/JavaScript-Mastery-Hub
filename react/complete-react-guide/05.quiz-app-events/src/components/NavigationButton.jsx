import React from 'react';

const NavigationButton = ({ goToNext, goToPrevious, currentIndex, totalQuestions }) => {
    return (
        <div className="flex justify-between mt-4">
            {/* Button for navigating to the previous question */}
            <button
                className={`text-white bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                onClick={goToPrevious} // Event: onClick, triggers goToPrevious function
                disabled={currentIndex === 0} // Disables the button if it's the first question
            >
                Previous
            </button>
            {/* Conditional rendering for the next/submit button */}
            {currentIndex < totalQuestions - 1 ? (
                // Button for navigating to the next question
                <button
                    className="text-white bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded"
                    onClick={goToNext} // Event: onClick, triggers goToNext function
                >
                    Next
                </button>
            ) : (
                // Button for submitting the quiz when on the last question
                <button
                    className="text-white bg-green-500 hover:bg-green-700 font-bold py-2 px-4 rounded"
                    onClick={goToNext} // Event: onClick, assuming goToNext will handle submission in the last question
                >
                    Submit
                </button>
            )}
        </div>
    );
};

export default NavigationButton;
