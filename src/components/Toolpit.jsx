import React, { useState } from 'react'

const Toolpit = () => {
const [isVisible,setIsVisible]=useState(false);

const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };
  return (
    <>
    <div style={{position:"relative"}}>
 <button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >click me</button>
 {isVisible?<span style={{
            position: "absolute",
            top:"36px",
            transform: "translateX(-50%)",
            padding: "5px",
            backgroundColor: "#333",
            color: "#fff",
            borderRadius: "4px",
            zIndex: "999",
          }}>this is a toolpit</span>:""}
</div>
    </>
  )
}

export default Toolpit;
