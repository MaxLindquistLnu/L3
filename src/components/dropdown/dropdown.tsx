import React from 'react';
import './dropdown.css';

interface DropdownOption {
    value: string;
    label: string;
}

interface DropdownProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    options: DropdownOption[];
}

function Dropdown(props: DropdownProps) {
    const { options, ...rest } = props;
    
    return (
        <select {...rest} className="dropdown">
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
}

export default Dropdown;
