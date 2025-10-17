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
        <div className='dropdown-container'>
        <div className="mydict">
	        <div>
		        <label>
			        <input type="radio" name="radio"/>
			        <span>Encode</span>
		        </label>
		        <label>
			        <input type="radio" name="radio"/>
			        <span>Decode</span>
		        </label>
	        </div>
        </div>
        <select {...rest} className="dropdown">
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
        </div>
    );
}

export default Dropdown;
