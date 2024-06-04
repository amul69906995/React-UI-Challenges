import React, { useState } from 'react'

const Model = () => {
    const [isOpen,setIsOpen]=useState(false)
  return (
    <>
    <div style={{}}>
        <button onClick={()=>setIsOpen(true)}>model</button>
        {isOpen && (
            <div style={{display:'flex',flexDirection:'column',alignItems:'center',background:'blue',position:'absolute',top:'0',zIndex:4,width:'100vw'}}>
                <h1 onClick={()=>setIsOpen(false)} style={{cursor:'pointer'}}>&times;</h1>
                <div>header</div>
                <div>body</div>
                <div>footer</div>
            </div>
        )}
        </div>
    </>
  )
}

export default Model
