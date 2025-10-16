import React from 'react';
import './outputField.css';

function OutputField(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
    return (
        <textarea
            {...props}
            className="output-field"
        />
    );
}

export default OutputField;
