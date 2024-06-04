import React, { useState } from 'react'
import data from '../seed/stepProgressBar.json'
import { Button } from 'react-scroll'
const StepProgressBar = () => {
    const [currentStep,setCurrentStep]=useState(0)
  return (
  <>
{data.map((d,i)=><button style={currentStep===i?{backgroundColor:'red'}:{}}>{d}</button>)}

<br />
<button disabled={currentStep===0} onClick={()=>setCurrentStep(prevState=>prevState-1)}>prev</button>
<button disabled={currentStep===data.length-1} onClick={()=>setCurrentStep(prevState=>prevState+1)}>next</button>
  </>
  )
}

export default StepProgressBar
