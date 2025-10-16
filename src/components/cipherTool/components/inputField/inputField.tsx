import React from 'react';

function InputField(props: React.InputHTMLAttributes<HTMLInputElement>) {
    return (
        <input
            {...props}
            className="input-field"
        />
    );
}

export default InputField;