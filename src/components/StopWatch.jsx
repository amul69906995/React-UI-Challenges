import React ,{useRef, useState}from 'react'

const StopWatch = () => {
    const [timer,setTimer]=useState(300)
    let tick=useRef();
    const handleClickStart=()=>{
      if(tick.current)clearInterval(tick.current)
     
     tick.current= setInterval(() => {
      setTimer(prevTimer => {
        if (prevTimer > 0) {
          return prevTimer - 1;
        } else {
          clearInterval(tick.current);
          return 0;
        }
      });
    }, 1000);

   
    }
    const handleClickStop=()=>{
      clearInterval(tick.current)
    }
    
  return (
  <>
  {`${Math.floor(timer/60)}:${timer%60}`} <br />{timer}
   <button onClick={()=>setTimer(300)}>reset</button>
   <button onClick={handleClickStart}>start</button>
   <button onClick={handleClickStop}>stop</button>
  </>
  )
}

export default StopWatch
