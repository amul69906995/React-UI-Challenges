import React, { useState } from "react";
import data from '../seed/accordianData.json'
import AccordianCard from "./AccordianCard";
function Accordian() {
    const [type, setType] = useState('single')
    const handleClick = () => {
        if (type === 'single') setType('multiple')
        else setType('single')
    }
  const [selectedSingle,setSelectedSingle]=useState(null)
  
  const handleSingle=(id)=>{
    if(selectedSingle==id)setSelectedSingle(null)
    else setSelectedSingle(id)
  }
    return (
        <>
            {`${type} type accordian`}
            <button onClick={handleClick}>toggle</button>
            {data && data.map(d => <AccordianCard key={d.id} handleSingle={handleSingle} showSingle={selectedSingle==d.id} id={d.id} content={d.content} title={d.title}  type={type}/>)}
        </>
    )
}
export default Accordian;