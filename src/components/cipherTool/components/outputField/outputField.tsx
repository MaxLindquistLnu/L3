import React from 'react';

function OutputField(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
    return (
        <textarea
            {...props}
            className="output-field"
        />
    );
}

export default OutputField;
