import React from 'react';

const ResultList = ({ postcodes }) => {
    return (
        <ul>
            {postcodes.map((postcode, index) => (
                <li key={index}>{postcode}</li>
            ))}
        </ul>
    );
};

export default ResultList;
