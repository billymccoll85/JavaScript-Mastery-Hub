import React from 'react';

function Dashboard({ user, logoutUser }) {
    return (
        <div className="max-w-md mx-auto my-10 p-6 border border-gray-300 rounded-lg text-center">
            <h2 className="text-lg font-semibold mb-4">Welcome, {user.username}!</h2>
            <button onClick={logoutUser} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg">
                Logout
            </button>
        </div>
    );
}

export default Dashboard;
