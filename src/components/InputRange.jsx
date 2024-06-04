import React, { useEffect, useRef, useState } from 'react'

const InputRange = () => {
    const [currentValue,setCurrentValue]=useState(10)
    const progressRef=useRef(null)
    const [elementWidth,setElementWidth]=useState(null)
    const [left,setLeft]=useState(null)
    const handleClick=(e)=>{
        progressRef.current = e.target.getBoundingClientRect();
      console.log("progressref",progressRef.current)
      if(!left&&!elementWidth){
        setElementWidth(progressRef.current.width)
        setLeft(progressRef.current.left)
      }
        const  widthWhereWeClicked= e.clientX -left;
      
        const newValue = (widthWhereWeClicked / elementWidth) * 100;
        setCurrentValue(newValue);
    }
    
    const [value, setValue] = useState(50);
    const containerRef = useRef(null);
  
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const offsetX = e.clientX - containerRef.current.getBoundingClientRect().left;
        const newValue = Math.max(0, Math.min((offsetX / containerWidth) * 100, 100));
        setValue(newValue);
      }
    };
  
    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  
    const handleMouseDown = () => {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    };
  
  return (
    <>
    <h1>{currentValue}%</h1>
    <div>
      <div ref={progressRef} onClick={handleClick} style={{width:'50vw',maxWidth:'300px',height:'12px',border:'2px solid blue'}}>
<div style={{height:'12px',backgroundColor:'blue',width:`${currentValue}%`}}></div>
      </div>
    </div>
    <div
      ref={containerRef}
      style={{
        width: '300px',
        height: '20px',
        backgroundColor: '#ccc',
        borderRadius: '10px',
        position: 'relative',
        cursor: 'pointer',
      }}
      onMouseDown={handleMouseDown}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: `${value}%`,
          transform: 'translateX(-50%)',
          width: '10px',
          height: '20px',
          backgroundColor: 'blue',
          borderRadius: '50%',
        }}
      ></div>
    </div>
    </>
  )
}

export default InputRange;


