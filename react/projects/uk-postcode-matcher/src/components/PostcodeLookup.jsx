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
        clearData(); // Ensure data is cleared before making a new search

        // Determine if the input is likely a full postcode or an outcode
        const isOutcode = /^[A-Z]{1,2}\d[A-Z\d]?$/i.test(postcode);

        const baseUrl = 'https://api.postcodes.io/';
        const url = isOutcode ? `${baseUrl}outcodes/${encodeURIComponent(postcode)}` : `${baseUrl}postcodes/${encodeURIComponent(postcode)}`;

        try {
            const response = await fetch(url);
            const data = await response.json();
            if (data.status === 200 && data.result) {
                if (isOutcode) {
                    setAdminDistrict(data.result.admin_district || []);
                    setLatitude(data.result.latitude);
                    setLongitude(data.result.longitude);
                } else {
                    setAdminWard(data.result.admin_ward);
                    setAdminDistrict(data.result.admin_district);
                    setMsoa(data.result.msoa);
                    setDateIntroduced(data.result.date_of_introduction);
                    setLatitude(data.result.latitude);
                    setLongitude(data.result.longitude);
                    setOutcode(data.result.outcode);
                }
            } else {
                setError('No results found');
            }
        } catch (error) {
            console.error(error);
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
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={postcode}
                    onChange={handleInputChange}
                    placeholder="Enter full postcode or outcode"
                    className="input-field-class"
                />
                <button type="submit">Lookup</button>
            </form>
            {error && <p>Error: {error}</p>}
            {!error && (
                <div>
                    {adminWard && <p>Admin Ward: {adminWard}</p>}
                    {adminDistrict.length > 0 ? (
                        <p>Admin Districts: {adminDistrict.join(', ')}</p>
                    ) : (
                        <p>Admin District: {adminDistrict}</p>
                    )}
                    {msoa && <p>MSOA: {msoa}</p>}
                    {dateIntroduced && <p>Date Postcode Introduced: {dateIntroduced}</p>}
                    {latitude && longitude && <p>Location: Lat {latitude}, Long {longitude}</p>}
                    {outcode && <p>Outcode: {outcode}</p>}
                </div>
            )}
        </div>
    );
}

export default PostcodeLookup;
