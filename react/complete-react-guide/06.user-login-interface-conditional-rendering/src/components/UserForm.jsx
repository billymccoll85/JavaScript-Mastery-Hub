import React, { useState } from 'react';

// The UserForm component handles both user registration and login based on the mode.
function UserForm({ mode, onUserAuth, toggleFormMode }) {
    const [username, setUsername] = useState(''); // State for storing the username input
    const [password, setPassword] = useState(''); // State for storing the password input
    const [errors, setErrors] = useState({}); // State for storing validation errors

    // Function to validate user inputs
    const validateForm = () => {
        let isValid = true;
        let errors = {};
        
        // Check if username meets minimum length requirement
        if (username.length < 3) {
            isValid = false;
            errors.username = 'Username must be at least 3 characters long.';
        }

        // Check if password is at least 6 characters and contains both letters and numbers
        if (password.length < 6 || !password.match(/^(?=.*[a-zA-Z])(?=.*[0-9])/)) {
            isValid = false;
            errors.password = 'Password must be at least 6 characters and include both letters and numbers.';
        }

        setErrors(errors); // Update the errors state
        return isValid; // Return the validity of the form
    };

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission behavior
        if (validateForm()) {
            onUserAuth(username, password, mode); // Authenticate or register user
            setUsername(''); // Clear username input field
            setPassword(''); // Clear password input field
            setErrors({}); // Clear errors
        }
    };

    return (
        <div className="max-w-md mx-auto my-10 p-6 border border-gray-300 rounded-lg">
            <h2 className="text-lg font-semibold text-center mb-6">{mode === 'login' ? 'Login' : 'Register'}</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    placeholder="Username"
                    className="w-full px-4 py-2 border rounded-lg text-gray-700"
                    required />
                {errors.username && <p className="text-red-500 text-xs italic">{errors.username}</p>}
                
                <input
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="Password"
                    className="w-full px-4 py-2 border rounded-lg text-gray-700"
                    required />
                {errors.password && <p className="text-red-500 text-xs italic">{errors.password}</p>}
                
                <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
                    {mode === 'login' ? 'Login' : 'Register'}
                </button>
                
                <p className="text-center text-sm text-gray-600">
                    {mode === 'login' ? 'Not registered yet? ' : 'Already have an account? '}
                    {/* Button to toggle between login and register mode */}
                    <button type="button" onClick={toggleFormMode} className="text-blue-500 hover:text-blue-700 font-semibold">
                        {mode === 'login' ? ' Register' : ' Login'}
                    </button>
                </p>
            </form>
        </div>
    );
}

export default UserForm;
