import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import QrCodeGenerator from './components/GenerateQR/QrCodeGenerator.jsx'
import QrCodeScanner from './components/ScanQR/QrCodeScanner.jsx'
import { GenerateHistory } from './components/GenerateHistory/GenerateHistory.jsx'
import { ScanHistory } from './components/ScanHistory/ScanHistory.jsx'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Generator</Link> {" "}
        <Link to="/scanner">Scanner</Link>
        <Link to="/scanHistory">Scanning History</Link>
        <Link to="/generateHistory">Generating History</Link>
      </nav>

      <Routes>
        <Route path="/" element={<QrCodeGenerator />} />
        <Route path="/scanner" element={<QrCodeScanner />} />
        <Route path="/scanHistory" element={<ScanHistory />} />
        <Route path="/generateHistory" element={<GenerateHistory />} />
      </Routes>
    </BrowserRouter>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);

