import { Scanner } from '@yudiel/react-qr-scanner';
import { useState } from "react";
import '../../style.css';
import { SCAN_DATA } from '../../../constants';


function App() {
  const [scans, setScans] = useState([]);

  const scanHandler = (result) => {
    if (!result) return;

    const value = result[0]?.rawValue || result; // в зависимости от формата
    setScans(prev => [...prev, value]);

    const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');
    localStorage.setItem(SCAN_DATA, JSON.stringify([...prevData, value]));
  }

  return (
    <div className="container">
      <h1>QR Scanner</h1>
      <Scanner
        onScan={scanHandler}
        onError={(error) => console.log(error?.message)}
      />

      <ul>
        {scans.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}


export default App;