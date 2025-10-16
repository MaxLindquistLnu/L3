import { useState } from 'react'
import Button from '../button/button'
import InputField from './components/inputField/inputField'
import OutputField from './components/outputField/outputField'
import { Cipher } from '../../cipherModule/Cipher'

function CipherTool() {
  const [inputText, setInputText] = useState('')
  const [outputText, setOutputText] = useState('')

  const handleButtonClick = () => {
    const cipher = new Cipher()
    setOutputText(cipher.encryptCaesar(3, inputText))
  }

  return (
    <>
      <InputField 
        value={inputText}
        onChange={(e) => setInputText(e.target.value)} 
        placeholder="Enter text"
      />
      <Button text="click me" onClick={handleButtonClick}/>
      <OutputField 
        value={outputText}
        readOnly
      />
    </>
  )
}

export default CipherTool