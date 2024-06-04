import React, { useEffect, useState } from 'react'

const Theme = () => {
    
    const [theme, setTheme] = useState("")
    console.log(theme)
    const handleClick = () => {
        if (theme === "dark") {
            setTheme("light")
            

        } else {
            setTheme("dark")
        }
       
    }
    useEffect(() => {
      
        if(!theme){
        const themeValue = localStorage.getItem("theme")
        setTheme(themeValue)
        } else{
            localStorage.setItem("theme",theme)
            }
      
    }, [theme])
    
    return (
        <div style={theme==='light'?{backgroundColor:"white",height:'40vh'}:{backgroundColor:"black",height:'40vh'}}>

           <div style={theme==='light'?{color:"black"}:{color:"white"}}>{theme}</div> 
            <button style={theme==='light'?{color:"black"}:{color:"red"}} onClick={handleClick}>changeTheme</button>
        </div>
    )
}

export default Theme;
