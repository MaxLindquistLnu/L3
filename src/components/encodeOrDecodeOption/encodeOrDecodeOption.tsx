import './encodeOrDecodeOption.css'

function EncodeOrDecodeOption() {
    return (
            <div className="mydict">
                <div>
                    <label>
                        <input type="radio" name="radio" defaultChecked/>
                        <span>Encode</span>
                    </label>
                    <label>
                        <input type="radio" name="radio"/>
                        <span>Decode</span>
                    </label>
                </div>
            </div>
    )
}

export default EncodeOrDecodeOption