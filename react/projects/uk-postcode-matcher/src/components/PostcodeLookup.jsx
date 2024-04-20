import React, { useState } from 'react';

function PostcodeLookup() {
    const [postcode, setPostcode] = useState('');
    const [adminWard, setAdminWard] = useState('');
    const [adminDistrict, setAdminDistrict] = useState('');
    const [msoa, setMsoa] = useState('');
    const [dateIntroduced, setDateIntroduced] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [outcode, setOutcode] = useState('');
    const [error, setError] = useState('');

    const handleInputChange = (event) => {
        setPostcode(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!postcode) {
            setError('Please enter a postcode');
            return;
        }

        try {
            const response = await fetch(`https://api.postcodes.io/postcodes/${postcode}`);
            const data = await response.json();
            if (data.status === 200 && data.result) {
                setAdminWard(data.result.admin_ward);
                setAdminDistrict(data.result.admin_district);
                setMsoa(data.result.msoa);
                setDateIntroduced(data.result.date_of_introduction);
                setLatitude(data.result.latitude);
                setLongitude(data.result.longitude);
                setOutcode(data.result.outcode);
                setError('');
            } else {
                clearData();
                setError('No results found');
            }
        } catch (error) {
            console.error(error);
            clearData();
            setError('Failed to fetch data');
        }
    };

    const clearData = () => {
        setAdminWard('');
        setAdminDistrict('');
        setMsoa('');
        setDateIntroduced('');
        setLatitude('');
        setLongitude('');
        setOutcode('');
    };

    return (
        <div className="max-w-md mx-auto p-4">
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <input
                        type="text"
                        value={postcode}
                        onChange={handleInputChange}
                        placeholder="Enter postcode"
                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div>
                    <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Lookup
                    </button>
                </div>
            </form>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            {!error && (
                <div className="mt-4 space-y-2">
                    {adminWard && <p><strong>Admin Ward:</strong> {adminWard}</p>}
                    {adminDistrict && <p><strong>Admin District:</strong> {adminDistrict}</p>}
                    {msoa && <p><strong>MSOA:</strong> {msoa}</p>}
                    {dateIntroduced && <p><strong>Date Postcode Introduced:</strong> {dateIntroduced}</p>}
                    {latitude && longitude && (
                        <p><strong>Location:</strong> Lat {latitude}, Long {longitude}</p>
                    )}
                    {outcode && <p><strong>Outcode:</strong> {outcode}</p>}
                </div>
            )}
        </div>
    );
}

export default PostcodeLookup;
