import { SCAN_DATA } from "../../../constants";
import { QRCodeSVG } from "qrcode.react";
import '../../style.css';
import { Scanner } from '@yudiel/react-qr-scanner';

export const ScanHistory = () => {
    const data = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');
    return (
      <div>
        {data.length > 0 ? (
        data.map((text) => (
        <p key={text}>
          <QRCodeSVG value={text} size={100} />
          {text}
        </p>
        ))
        ) : (
        <h1>Вы ничего не сканировали</h1>
        )}
    </div>
    );
 }