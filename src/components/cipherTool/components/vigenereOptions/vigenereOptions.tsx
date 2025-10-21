import './vigenereOptions.css';

function VigenereOptions() {
    return (
        <div className="vigenere-options">
            <label htmlFor="key" className="key-label">Keyword:</label>
            <input 
                type="text" 
                id="key" 
                className="key-input"
                placeholder="Enter keyword..."
            />
        </div>
    )
}

export default VigenereOptions;