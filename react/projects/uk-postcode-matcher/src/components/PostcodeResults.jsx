import React from 'react';
import RenderList from './RenderList';

const PostcodeResults = ({ results }) => (
    <div className="mt-4 space-y-4">
        {results.map((result, index) => (
            <div key={index} className="p-4 bg-slate-600 text-white rounded-lg shadow">
                {result.error ? (
                    <p className="text-red-500">{result.error}</p>
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
);

function formatDate(dateStr) {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    const month = date.toLocaleString('en-GB', { month: 'long' });
    const year = date.getFullYear();
    return `${month} ${year}`;
}

export default PostcodeResults;
