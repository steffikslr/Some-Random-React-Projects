import QRCode from 'react-qr-code';
import './qr-code.css'
import { useState } from 'react';

function QRCodeGenerator (){
    const [value, setValue] = useState('');
    const [qrValue, setQrValue] = useState('');

  const handleGenerate = () => {
    setQrValue(value);
    setValue('');
  };
    
    return (
        <div className="qr-code-generator">
            <h1>QR Code Generator</h1>
            <div className='input-container'>
            <input onChange={(event) => setValue(event.target.value)} type="text" placeholder="Enter your text here" value={value}></input>
            <button onClick={handleGenerate} disabled={value ? false : true}>Generate QR Code</button>
            </div>
             <QRCode size={256} value={qrValue} />
        </div>
    )

 }

export default QRCodeGenerator;