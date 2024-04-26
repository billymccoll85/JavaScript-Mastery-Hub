import React, { useState, useEffect } from 'react';
import UserForm from './components/UserForm';
import Dashboard from './components/Dashboard';

function App() {
    const [currentUser, setCurrentUser] = useState(null); // State to track the current logged-in user
    const [users, setUsers] = useState([]); // State to store all registered users
    const [formMode, setFormMode] = useState('login'); // State to toggle between login and registration forms

    // Load users from local storage on initial load
    useEffect(() => {
        const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
        setUsers(storedUsers);
    }, []);

    // Save users to local storage whenever the users state changes
    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(users));
    }, [users]);

    // Function to handle both user registration and login
    const handleUserAuth = (username, password, mode) => {
        if (mode === 'register') {
            // Check if user already exists to prevent duplicate registrations
            const exists = users.some(user => user.username === username);
            if (!exists) {
                const newUser = { username, password };
                setUsers(prevUsers => [...prevUsers, newUser]); // Add new user to state
                setCurrentUser(newUser); // Log in new user automatically after registration
            } else {
                alert('User already exists. Please login instead.');
            }
        } else if (mode === 'login') {
            // Authenticate user based on username and password
            const user = users.find(user => user.username === username && user.password === password);
            if (user) {
                setCurrentUser(user); // Set current user on successful login
            } else {
                alert('Invalid username or password!');
            }
        }
    };

    // Logout function to clear the current user state
    const handleLogout = () => {
        setCurrentUser(null); // Reset currentUser to null, effectively logging out the user
    };

    // Toggle form mode between login and register
    const toggleFormMode = () => {
        setFormMode(prevMode => prevMode === 'login' ? 'register' : 'login');
    };

    // Conditional rendering based on whether a user is logged in
    return (
        <div className="container mx-auto px-4">
            {!currentUser ? (
                // Render UserForm for either login or registration based on formMode
                <UserForm
                    mode={formMode}
                    onUserAuth={handleUserAuth}
                    toggleFormMode={toggleFormMode}
                />
            ) : (
                // Render Dashboard component when a user is logged in
                <Dashboard user={currentUser} onLogout={handleLogout} />
            )}
        </div>
    );
}

export default App;
