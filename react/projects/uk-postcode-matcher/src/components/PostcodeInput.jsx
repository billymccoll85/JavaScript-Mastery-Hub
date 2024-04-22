import React from 'react';

const PostcodeInput = ({ input, handleInputChange, handleSubmit, isLoading }) => (
    <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
            value={input}
            onChange={handleInputChange}
            placeholder="Enter Postcodes (comma-separated)"
            className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            rows="3"
        />
        <button
            type="submit"
            className="w-full text-slate-900 hover:text-sky-400 bg-sky-400 hover:bg-slate-900 focus:outline-none focus:ring-2 border border-sky-400 hover:focus:ring-sky-400 focus:ring-opacity-50 rounded-md text-sm py-2"
            disabled={isLoading}
        >
            {isLoading ? 'Loading...' : 'Lookup'}
        </button>
    </form>
);

export default PostcodeInput;
