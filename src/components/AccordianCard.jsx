import React, { useState } from 'react'

const AccordianCard = ({ id, content, title, type,handleSingle,showSingle}) => {
    const [showMulti, steShowMulti] = useState(false)
    if (type === 'multiple') {
        return (
            <div>
                <h3 onClick={() => steShowMulti(!showMulti)}>{title}</h3>
               {showMulti&&content}
            </div>
        )
    }
    else{
        return(
            <div>
               <li onClick={()=>handleSingle(id)}>{title}</li>
               {showSingle&&content}
            </div>
        )
    }
}

export default AccordianCard
