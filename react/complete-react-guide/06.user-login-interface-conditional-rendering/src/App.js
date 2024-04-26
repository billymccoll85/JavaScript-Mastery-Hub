import React, { useState } from 'react';
import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';

function App() {
    const [users, setUsers] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);

    const registerUser = (username, password) => {
        const newUser = { username, password };
        setUsers([...users, newUser]);
    };

    const loginUser = (username, password) => {
        const foundUser = users.find(user => user.username === username && user.password === password);
        if (foundUser) {
            setCurrentUser(foundUser);
        } else {
            alert("Invalid credentials!");
        }
    };

    const logoutUser = () => {
        setCurrentUser(null);
    };

    return (
        <div className="container mx-auto p-4">
            {!currentUser ? (
                <>
                    <RegistrationForm registerUser={registerUser} />
                    <LoginForm loginUser={loginUser} />
                </>
            ) : (
                <Dashboard user={currentUser} logoutUser={logoutUser} />
            )}
        </div>
    );
}

export default App;
