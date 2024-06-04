import React, { useState } from 'react'

const Toggle = () => {
    const [isChecked, setIsChecked] = useState(false)
    const handleClick = () => {
        setIsChecked(!isChecked)
    }
    console.log(isChecked)
    const colorBlue = {
        display:'flex',
        alignItems:'center',
        height: '20px',
        width: '60px',
        border: '2px solid blue',
        borderRadius: '10px',
        position: 'relative',
        backgroundColor: 'blue',
        padding: '2px'
    }
    const right_0 = {
        height: '15px', width: '15px', border: '1px solid black', borderRadius: '10px', position: 'absolute',
        right: '0',
        backgroundColor:'white'
    }
    return (
        <>
            <input type="checkbox" name="toggle" id="toggle" checked={isChecked} onChange={handleClick} />
            <div onClick={handleClick} style={isChecked ? colorBlue : {
                right:'2px',
                display:'flex',
                alignItems:'center',
                height: '20px',
                width: '60px',
                border: '2px solid blue',
                borderRadius: '10px',
                position: 'relative',
                padding: '2px'
            }}

            >
                <div style={isChecked ? right_0 : { height: '15px', width: '15px', border: '1px solid black', borderRadius: '10px', position: 'absolute' }} ></div>
            </div>
        </>
    )
}

export default Toggle
