import React from 'react';

const RenderList = ({ title, items }) => {
    if (!Array.isArray(items) || items.length === 0) {
        return null;
    }
    return (
        <>
            {items.map((item, idx) => (
                <React.Fragment key={idx}>
                    <p className={idx === 0 ? '' : 'mt-4'}><strong>{title}:</strong></p>
                    <ul>
                        <li>{item}</li>
                    </ul>
                </React.Fragment>
            ))}
        </>
    );
};

export default RenderList;
