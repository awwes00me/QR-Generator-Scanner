import { QRCodeSVG } from "qrcode.react";
import { useState } from "react";
import '../../style.css';
import { GENERATE_DATA } from '../../../constants';


function App() {
  const [valueInput, setValueInput] = useState('')
  const [qr, setQr] = useState(false)
  const GenerateHandler = (valueInput) => {
  const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');
  localStorage.setItem(
    GENERATE_DATA,
    JSON.stringify([...prevData, valueInput])
    );
  }

  
  return (
    <div className="container">
      <h1>QR Generator</h1>
      { qr && <QRCodeSVG value={qr} />}
      <input type="text" placeholder="Input Text" value={valueInput} onChange={(e) => setValueInput(e.target.value)}></input>
      <button onClick={() => {setQr(valueInput); GenerateHandler(valueInput) }}>Generate</button>
    </div>
  );
}

export default App;
