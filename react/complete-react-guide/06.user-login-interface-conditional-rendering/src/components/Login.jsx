import React, { useState } from 'react';

function LoginForm({ loginUser }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        loginUser(username, password);
    };

    return (
        <div className="max-w-md mx-auto my-10 p-6 border border-gray-300 rounded-lg">
            <h2 className="text-lg font-semibold text-center mb-6">Login</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    placeholder="Username"
                    className="w-full px-4 py-2 border rounded-lg text-gray-700"
                    required />
                <input
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="Password"
                    className="w-full px-4 py-2 border rounded-lg text-gray-700"
                    required />
                <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
                    Login
                </button>
            </form>
        </div>
    );
}

export default LoginForm;
