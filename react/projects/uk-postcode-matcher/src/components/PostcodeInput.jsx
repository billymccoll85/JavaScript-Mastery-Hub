import React from 'react';

const PostcodeInput = ({ input, handleInputChange, handleSubmit, handleClear, isLoading }) => (
    <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
            value={input}
            onChange={handleInputChange}
            placeholder="Enter Postcodes (comma-separated)"
            className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            rows={input.split('\n').length || 1}
        />
        <div className="flex space-x-4">
            <button
                type="submit"
                className="flex-1 text-slate-900 hover:text-sky-400 bg-sky-400 hover:bg-slate-900 focus:outline-none focus:ring-2 border border-sky-400 hover:focus:ring-sky-400 focus:ring-opacity-50 rounded-md text-sm py-2"
                disabled={isLoading}
            >
                {isLoading ? 'Loading...' : 'Lookup'}
            </button>
            <button
                type="button"
                onClick={handleClear}
                className="flex-1 text-white hover:text-white bg-red-600 hover:bg-red-800 focus:outline-none focus:ring-2 border border-red-500 hover:focus:ring-red-500 focus:ring-opacity-50 rounded-md text-sm py-2"
                disabled={isLoading || !input}
            >
                Clear
            </button>
        </div>
    </form>
);

export default PostcodeInput;
