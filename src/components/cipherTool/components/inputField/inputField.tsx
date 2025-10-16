import React from 'react';
import './inputField.css';

function InputField(props: React.InputHTMLAttributes<HTMLTextAreaElement>) {
    return (
        <textarea
            {...props}
            className="input-field"
        />
    );
}

export default InputField;