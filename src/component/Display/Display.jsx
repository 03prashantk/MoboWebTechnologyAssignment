import React from 'react';
import './Display.scss';

const Display = ({ value }) => {
    const displayValue = JSON.stringify(value, null, 2);

    return (
        <div className="Display">
            <h3>Display</h3>
            <pre>{displayValue}</pre>
        </div>
    );
}

export default Display;
