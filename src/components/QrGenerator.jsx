import React, { useState } from 'react'
import QRCode from 'qrcode'
const QrGenerator = () => {
    const [text,setText]=useState("")
    const [qrSrc,setQrSrc]=useState('')
    const handleClick=()=>{
        generateQR();
    }
    const generateQR = async () => {
        try {
          setQrSrc(await QRCode.toDataURL(text))
        } catch (err) {
          console.error(err)
        }
      }
  return (
    <div>
      <input type="text" name="" id="" value={text} onChange={(e)=>setText(e.target.value)}/>
      <button onClick={handleClick}>generate qr</button>
      <div>
      {qrSrc&&<a href={qrSrc} download={true}><img src={qrSrc} alt="error" /></a>}
      <p>{qrSrc&&text}</p>
      </div>
    </div>
  )
}

export default QrGenerator
