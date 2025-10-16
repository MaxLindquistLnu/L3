import { useState } from 'react'
import InputField from './components/inputField/inputField'
import OutputField from './components/outputField/outputField'
import { Cipher } from '../../cipherModule/Cipher'
import './cipherTool.css'

function CipherTool() {
  const [inputText, setInputText] = useState('')
  const [outputText, setOutputText] = useState('')

  const handleInputChange = (value: string) => {
    setInputText(value)
    const cipher = new Cipher()
    setOutputText(cipher.encryptCaesar(3, value))
  }

  return (
    <div className="cipher-tool">
      <InputField 
        value={inputText}
        onChange={(e) => handleInputChange(e.target.value)} 
        placeholder="Enter text"
      />
      <OutputField 
        value={outputText}
        readOnly
      />
    </div>
  )
}

export default CipherTool