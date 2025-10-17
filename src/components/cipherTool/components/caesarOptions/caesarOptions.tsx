import { useState } from 'react';
import './caesarOptions.css'

function CaesarOptions() {
    const [shift, setShift] = useState(3);

    const handleIncrement = () => {
        if (isNaN(shift)) {
            setShift(0);
        }
        setShift(prev => prev + 1);
    };

    const handleDecrement = () => {
        if (isNaN(shift)) {
            setShift(0);
        }
        setShift(prev => prev - 1);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value);
        setShift(value);
    };

    return (
        <div className="caesar-options">
            <label htmlFor="shift">Shift:</label>
            <div className="shift-control">
                <button 
                    type="button"
                    className="shift-button" 
                    onClick={handleDecrement}
                    aria-label="Decrease shift"
                >
                    −
                </button>
                <input 
                    type="number" 
                    id="shift" 
                    name="shift" 
                    value={shift}
                    onChange={handleInputChange}
                    className="shift-input"
                />
                <button 
                    type="button"
                    className="shift-button" 
                    onClick={handleIncrement}
                    aria-label="Increase shift"
                >
                    +
                </button>
            </div>
        </div>
    );
}

export default CaesarOptions