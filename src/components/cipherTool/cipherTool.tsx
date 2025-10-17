import { useState, useEffect } from 'react'
import InputField from './components/inputField/inputField'
import OutputField from './components/outputField/outputField'
import EncodeOrDecodeOption from '../encodeOrDecodeOption/encodeOrDecodeOption'
import DropDown from '../dropdown/dropdown'
import { Cipher } from '../../cipherModule/Cipher'
import './cipherTool.css'

function CipherTool() {
  const [cipherMode, setCipherMode] = useState<'encode' | 'decode'>('encode')
  const [selectedCipher, setSelectedCipher] = useState('caesar')
  const [inputText, setInputText] = useState('')
  const [outputText, setOutputText] = useState('')

  const cipherOptions = [
        { value: 'caesar', label: 'Caesar Cipher' },
        { value: 'vigenere', label: 'Vigenere Cipher' },
        { value: 'atbash', label: 'Atbash Cipher' }
  ]

  useEffect(() => {
    if (inputText) {
      const cipher = new Cipher()
      const result = cipherMode === 'encode'
        ? cipher.encryptCaesar(3, inputText)
        : cipher.decryptCaesar(3, inputText)
      setOutputText(result)
    }
  }, [cipherMode, inputText])

  const handleCipherModeChange = (cipherMode: 'encode' | 'decode') => {
    setCipherMode(cipherMode)
  }

  const handleInputChange = (value: string) => {
    setInputText(value)
  }

  return (
    <div className="cipher-tool">
      <InputField 
        value={inputText}
        onChange={(e) => handleInputChange(e.target.value)} 
        placeholder="Enter text"
      />
      <div className="options-section">
      <EncodeOrDecodeOption
        onChange={handleCipherModeChange}
        value={cipherMode}
      />
      <DropDown 
        options={cipherOptions}
        value={selectedCipher}
        onChange={(e) => setSelectedCipher(e.target.value)}
      />
      </div>
      <OutputField 
        value={outputText}
        readOnly
      />
    </div>
  )
}

export default CipherTool