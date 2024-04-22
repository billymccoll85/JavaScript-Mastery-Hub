import React, { useState } from 'react';
import PostcodeInput from './PostcodeInput';  
import ErrorMessage from './ErrorMessage';
import LoadingIndicator from './LoadingIndicator';
import RenderList from './RenderList';
import { formatDate } from '../utils/utils';

function PostcodeLookup() {
    const [input, setInput] = useState('');
    const [results, setResults] = useState([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = (event) => {
        setInput(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!input) return;
        setError('');
        setResults([]);
        setIsLoading(true);

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
        } finally {
            setIsLoading(false);
        }
    };

    const handleClear = () => {
        setInput('');
        setResults([]);
        setError('');
    };

    return (
        <div className="w-full max-w-md mx-auto p-6 antialiased text-slate-500 dark:text-slate-400 bg-slate-700 shadow-md rounded-lg my-12">
            <PostcodeInput
                input={input}
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
                handleClear={handleClear}
                isLoading={isLoading}
            />
            {isLoading && <LoadingIndicator />}
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
