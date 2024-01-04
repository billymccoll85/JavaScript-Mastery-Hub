// Variables:
// - askedQuestions: an array to keep track of indices of asked questions
// - score: tracks the user's score, fetched from localStorage
// - progress: tracks the progress of the quiz, fetched from localStorage
// - totalQuestionsAsked: counts the total number of questions asked during the quiz

// Function fetchNewQuestion():
// - Call showLoader(true) to display loading spinner
// - Fetch 151 Pokémon from the Pokémon API
// - Select a random Pokémon that has not been asked before
// - Fetch detailed data of the selected Pokémon
// - Generate and display the question and image of the Pokémon
// - Generate four choices, including the correct answer
// - Randomize the order of choices and display them
// - Add the index of the asked question to the askedQuestions array
// - Increment totalQuestionsAsked
// - If all questions have been asked, call handleQuizCompletion()
// - Else, hide the loader

// Function showLoader(isLoading):
// - Display or hide the loader based on the isLoading parameter

// Function updateScoreAndProgress():
// - Update the score and progress bar display on the webpage

// Function handleChoiceSelection(selectedChoice, correctAnswer):
// - Check if the selected choice matches the correct answer
// - Display alert for correct or incorrect answer
// - Update score and progress accordingly
// - Store updated score and progress in localStorage
// - Call updateScoreAndProgress() to reflect changes on the webpage

// Event Listener for 'Next' Button:
// - Calls fetchNewQuestion() when the 'Next' button is clicked

// Event Listener for 'Restart' Button:
// - Calls restartQuiz() when the 'Restart' button is clicked

// Function restartQuiz():
// - Reset score and progress to zero
// - Store reset values in localStorage
// - Call updateScoreAndProgress() to reflect reset on the webpage
// - Fetch a new question

// Function initializeQuiz():
// - Initialize or reset quiz-related states like score and progress
// - Start the quiz by fetching the first question

// Call initializeQuiz() to start the quiz:
// - Invokes the initializeQuiz() function to begin the quiz

// Function displaySummary():
// - Calculate total questions attempted
// - Calculate total correct answers
// - Display a summary message including total score, correct answers, and attempted questions
// - Option to restart the quiz or exit

// Function handleQuizCompletion():
// - Check if all questions in the quiz have been attempted
// - Stop the quiz
// - Call displaySummary() to show the final results
// - Optionally, save final score to a leaderboard or database

// Function handleTimeLimit(perQuestionTimeLimit):
// - Set a timer for each question
// - If the user does not answer within the time limit, mark the question as incorrect
// - Move to the next question automatically after time expires
// - Update score and progress accordingly

// Function fetchQuizCategories():
// - Fetch different categories of Pokémon (e.g., types, generations)
// - Let the user select a category before starting the quiz
// - Fetch questions based on the selected category

// Function userSettings():
// - Allow user to set preferences (e.g., number of questions, difficulty level)
// - Adjust quiz parameters based on user settings
// - Store settings in localStorage for future sessions

// Function provideHints():
// - Offer a hint for a difficult question
// - Limit the number of hints available per quiz or per question
// - Deduct some points or give a smaller score for questions answered using hints

// Function animateCorrectIncorrectFeedback():
// - Animate feedback for correct and incorrect answers
// - Display visual effects (like color changes, icons) for immediate user feedback

// Event Listener for User Interruption:
// - Handle cases where the quiz is interrupted (e.g., page refresh, navigation away)
// - Save current state to allow resuming from the same point

// Function leaderboardDisplay():
// - Fetch and display a leaderboard showing top scores
// - Allow users to enter their name for the leaderboard
// - Update the leaderboard with new scores at the end of each quiz

// Function fetchPokemonByType(type):
// - Fetch Pokémon by specific type (e.g., fire, water)
// - Use the data to generate type-specific questions

// Function fetchPokemonEvolutionChain():
// - Fetch evolution chains of Pokémon
// - Create questions about what certain Pokémon evolve into

// Function fetchPokemonAbilities():
// - Fetch abilities of different Pokémon
// - Generate questions about specific Pokémon abilities

// Function randomCategoryQuiz():
// - Randomly select a category (type, abilities, evolution)
// - Fetch and display questions based on the selected category

// Function fetchPokemonByRegion(region):
// - Fetch Pokémon available in specific regions or games
// - Use this data for region-specific quizzes

// Function dailyChallenge():
// - Implement a daily challenge with unique questions
// - Offer rewards or points for completing daily challenges

// These functionalities utilize different aspects of the PokéAPI, providing varied and engaging content for users.
