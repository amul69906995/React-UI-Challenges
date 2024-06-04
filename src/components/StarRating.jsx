import React,{useState} from 'react'
import { TiStarFullOutline } from "react-icons/ti";
const StarRating = () => {
    const [rating,setRating]=useState(0)
    const [isClicked,setIsClicked]=useState(false)

    console.log(rating)
    const handleMouseLeave=()=>{
        if(!isClicked){
            setRating(0)
        }
        
    }
  return (
    <div>
      {[...Array(10)].map((element,idx)=>{
        idx=idx+1;
        return(
            <TiStarFullOutline color={idx<=rating?'yellow':""}
                key={idx}
                onClick={()=>{setRating(idx);setIsClicked(true)}}
                onMouseEnter={()=>{setRating(idx);setIsClicked(false)}}
                onMouseLeave={handleMouseLeave}
            />
        )
      })}
    </div>
  )
}

export default StarRating
