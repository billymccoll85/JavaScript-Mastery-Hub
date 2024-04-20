import React, { useState } from 'react';

function AdvancedSearch() {
    const [search, setSearch] = useState('');
    const [results, setResults] = useState([]);
    const [error, setError] = useState('');

    const handleChange = (event) => {
        setSearch(event.target.value);
    };

    const handleSearch = async (event) => {
        event.preventDefault();
        setError('');
        setResults([]);

        try {
            // Decide based on input what API endpoint to hit
            let url;
            if (search.match(/^[A-Z]{1,2}\d{1,2} ?\d[A-Z]{2}$/i)) { // Simple regex for postcode
                url = `https://api.postcodes.io/postcodes/${encodeURIComponent(search)}`;
            } else {
                // Use another API for non-postcode queries
                url = `https://api.getAddress.io/find/${encodeURIComponent(search)}?api-key=YOUR_API_KEY_HERE`;
            }

            const response = await fetch(url);
            const data = await response.json();
            if (data.status === 200 && data.result) {
                setResults(Array.isArray(data.result) ? data.result : [data.result]);
            } else {
                setError('No results found');
            }
        } catch (error) {
            console.error(error);
            setError('Failed to fetch data');
        }
    };

    return (
        <div>
            <form onSubmit={handleSearch}>
                <input type="text" value={search} onChange={handleChange} placeholder="Enter postcode or address" className="input-class" />
                <button type="submit">Search</button>
            </form>
            {error && <p>{error}</p>}
            <ul>
                {results.map((result, index) => (
                    <li key={index}>{result.admin_district || result.address}</li>
                ))}
            </ul>
        </div>
    );
}

export default AdvancedSearch;
