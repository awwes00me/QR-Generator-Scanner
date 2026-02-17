import { GENERATE_DATA } from "../../../constants";
import { QRCodeSVG } from "qrcode.react";
import '../../style.css';

export const GenerateHistory = () => {
const data = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');

    return (
      <div className="generate-history">
        {data.length > 0 ? (
        data.map((text) => (
        <p key={text}>
          <QRCodeSVG value={text} size={100} />
          {text}
        </p>
        ))
        ) : (
        <h1>Вы ничего не генерировали</h1>
        )}
    </div>
    );
 }


