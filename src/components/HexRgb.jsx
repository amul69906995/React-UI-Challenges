import React, { useState } from 'react'

const HexRgb = () => {
    const [selectedType,setSelectedType]=useState('hex')
    const [currentColor,setCurrentColor]=useState('#000000')
    const generateHexColor=()=>{
        const randomColor = Math.floor(Math.random() * 16777215);
        const hexColor = '#' + randomColor.toString(16).padStart(6, '0');
        setCurrentColor(hexColor)
    }
    const generateRgbColor=()=>{
        setCurrentColor(`rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`)
    }
    const handleChange=(e)=>{
        setSelectedType(e.target.value)
    }
    const handleClick=()=>{
        if(selectedType==='hex')generateHexColor();
        else generateRgbColor()
    }
    const handleCopyClick = async () => {
        try {
            await navigator.clipboard.writeText(currentColor);
            alert('Text copied to clipboard!');
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };
  return (
    <div style={{height:'50vh',backgroundColor:currentColor}}>
      <select name="" id="" onChange={handleChange}>
        <option value="hex">Hex colorcode</option>
        <option value="rgb">Rgb colorcode</option>
      </select>
      <button onClick={handleClick}>generate</button>
      <p onClick={handleCopyClick} style={{ cursor: 'pointer' }}>{currentColor}</p>
      
    </div>
  )
}

export default HexRgb
