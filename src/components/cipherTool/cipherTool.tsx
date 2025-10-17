import { useState } from 'react'
import InputField from './components/inputField/inputField'
import OutputField from './components/outputField/outputField'
import DropDown from '../dropdown/dropdown'
import { Cipher } from '../../cipherModule/Cipher'
import './cipherTool.css'

function CipherTool() {
  const [selectedCipher, setSelectedCipher] = useState('caesar')
  const [inputText, setInputText] = useState('')
  const [outputText, setOutputText] = useState('')

  const cipherOptions = [
        { value: 'caesar', label: 'Caesar Cipher' },
        { value: 'vigenere', label: 'Vigenere Cipher' },
        { value: 'atbash', label: 'Atbash Cipher' }
  ]

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
      <DropDown 
        options={cipherOptions}
        value={selectedCipher}
        onChange={(e) => setSelectedCipher(e.target.value)}
      />
      <OutputField 
        value={outputText}
        readOnly
      />
    </div>
  )
}

export default CipherTool