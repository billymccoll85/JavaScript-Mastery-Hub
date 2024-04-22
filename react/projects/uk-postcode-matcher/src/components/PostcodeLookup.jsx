import React, { useState } from 'react';
import RenderList from './RenderList';
import ErrorMessage from './ErrorMessage';  
import LoadingIndicator from './LoadingIndicator';
import { formatDate } from '../utils/utils';

function PostcodeLookup() {
    const [input, setInput] = useState('');
    const [results, setResults] = useState([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = (event) => setInput(event.target.value);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError('');
        setResults([]);
        setIsLoading(true);

        // Logic for fetching postcodes
        const postcodes = input.split(',').map(pc => pc.trim()).filter(pc => pc !== '');
        const baseUrl = 'https://api.postcodes.io/';
        const fetchPromises = postcodes.map(postcode => {
            const endpoint = /^[A-Z]{1,2}\d[A-Z\d]?$/i.test(postcode) ? 
                             `outcodes/${encodeURIComponent(postcode)}` : 
                             `postcodes/${encodeURIComponent(postcode)}`;
            return fetch(`${baseUrl}${endpoint}`).then(res => res.json());
        });

        try {
            const data = await Promise.all(fetchPromises);
            const fetchedResults = data.map((item, index) => ({
                postcode: postcodes[index],
                result: item.result || null,
                error: item.error || (item.status === 404 ? 'No results found' : null),
                isOutcode: /^[A-Z]{1,2}\d[A-Z\d]?$/i.test(postcodes[index])
            }));

            setResults(fetchedResults.filter(r => !r.error));
            if (fetchedResults.some(r => r.error)) {
                setError('Some postcodes were not found');
            }
        } catch (err) {
            console.error(err);
            setError('Failed to fetch data');
        }

        setIsLoading(false);
    };

    return (
        <div className="w-full max-w-md mx-auto p-6 antialiased text-slate-500 dark:text-slate-400 bg-slate-700 shadow-md rounded-lg my-12">
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    value={input}
                    onChange={handleInputChange}
                    placeholder="Enter Postcodes (comma-separated)"
                    className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
                <button
                    type="submit"
                    className="w-full text-slate-900 hover:text-sky-400 bg-sky-400 hover:bg-slate-900 focus:outline-none focus:ring-2 border border-sky-400 hover:focus:ring-sky-400 focus:ring-opacity-50 rounded-md text-sm py-2"
                    disabled={isLoading}
                >
                    {isLoading ? <LoadingIndicator /> : 'Lookup'}
                </button>
            </form>
            {error && <ErrorMessage message={error} />}
            <div className="mt-4 space-y-4">
                {results.map((result, index) => (
                    <div key={index} className="p-4 bg-slate-600 text-white rounded-lg shadow">
                        {result.error ? (
                            <ErrorMessage message={result.error} />
                        ) : (
                            <>
                                <RenderList title="Wards" items={result.result.admin_ward} />
                                <RenderList title="Districts" items={result.result.admin_district} />
                                {result.result.msoa && <p className="mb-4 mt-2"><strong>MSOA:</strong> {result.result.msoa}</p>}
                                {result.result.date_of_introduction && <p className='mt-4'><strong>Date Introduced:</strong> {formatDate(result.result.date_of_introduction)}</p>}
                                {result.result.latitude && result.result.longitude && <p className='mt-4'><strong>Location:</strong> Lat {result.result.latitude}, Long {result.result.longitude}</p>}
                                {result.result.outcode && <p className='mt-4'><strong>Outcode:</strong> {result.result.outcode}</p>}
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PostcodeLookup;
