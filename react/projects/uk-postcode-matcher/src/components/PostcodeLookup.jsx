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
        setError('');
        clearData();

        const isOutcode = /^[A-Z]{1,2}\d[A-Z\d]?$/i.test(postcode);

        const baseUrl = 'https://api.postcodes.io/';
        const url = isOutcode ? `${baseUrl}outcodes/${encodeURIComponent(postcode)}` : `${baseUrl}postcodes/${encodeURIComponent(postcode)}`;

        try {
            const response = await fetch(url);
            const data = await response.json();
            if (data.status === 200 && data.result) {
                updateData(data.result, isOutcode);
            } else {
                setError('No results found');
            }
        } catch (error) {
            console.error(error);
            setError('Failed to fetch data');
        }
    };

    const updateData = (data, isOutcode) => {
        if (isOutcode) {
            setAdminDistrict(data.admin_district || []);
            setLatitude(data.latitude);
            setLongitude(data.longitude);
        } else {
            setAdminWard(data.admin_ward);
            setAdminDistrict(data.admin_district);
            setMsoa(data.msoa);
            setDateIntroduced(data.date_of_introduction);
            setLatitude(data.latitude);
            setLongitude(data.longitude);
            setOutcode(data.outcode);
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
        <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg mt-12">
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    value={postcode}
                    onChange={handleInputChange}
                    placeholder="Enter Postcode"
                    className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
                <button
                    type="submit"
                    className="w-full text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md text-sm py-2"
                >
                    Lookup
                </button>
            </form>
            {error && <p className="text-red-500">{error}</p>}
            {!error && (
                <div className="mt-4 space-y-2">
                    {adminWard && <p><strong>Admin Ward:</strong> {adminWard}</p>}
                    {Array.isArray(adminDistrict) ? (
                        <p><strong>Admin Districts:</strong> {adminDistrict.join(', ')}</p>
                    ) : (
                        <p><strong>Admin District:</strong> {adminDistrict}</p>
                    )}
                    {msoa && <p><strong>MSOA:</strong> {msoa}</p>}
                    {dateIntroduced && <p><strong>Date Introduced:</strong> {dateIntroduced}</p>}
                    {latitude && longitude && <p><strong>Location:</strong> Lat {latitude}, Long {longitude}</p>}
                    {outcode && <p><strong>Outcode:</strong> {outcode}</p>}
                </div>
            )}
        </div>
    );
}

export default PostcodeLookup;
