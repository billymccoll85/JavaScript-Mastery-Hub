import React from 'react';

const NavigationButton = ({ goToNext, goToPrevious, currentIndex, totalQuestions }) => {
    return (
        <div className="flex justify-between mt-4">
            <button
                className={`text-white bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                onClick={goToPrevious}
                disabled={currentIndex === 0}
            >
                Previous
            </button>
            {currentIndex < totalQuestions - 1 ? (
                <button
                    className="text-white bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded"
                    onClick={goToNext}
                >
                    Next
                </button>
            ) : (
                <button
                    className="text-white bg-green-500 hover:bg-green-700 font-bold py-2 px-4 rounded"
                    onClick={goToNext}  // Assuming goToNext will handle submission in the last question
                >
                    Submit
                </button>
            )}
        </div>
    );
};

export default NavigationButton;
