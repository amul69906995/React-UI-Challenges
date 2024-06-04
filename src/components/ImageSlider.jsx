import React, { useEffect, useState } from 'react'
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

import { FaCircle } from "react-icons/fa6";
const ImageSlider = () => {
    const url = 'https://picsum.photos/v2/list?page=1&limit=6'
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState('')
    const [currentImg, setCurrentImg] = useState(null)
    useEffect(() => {
        fetchData();

    }, [])
    const fetchData = async () => {
        console.log("fetching data")
        try {
            const res = await fetch(url);
            const result = await res.json();
           // console.log(result)
            setData(result);
            setCurrentImg(result[0])
            setIsLoading(false)

        } catch (e) {

            setError(e)
            setIsLoading(false)
        }

    }
    const handleClickRight = () => {
        if (currentImg.id < data.length - 1) {
            const reqImg = data.find(d => d.id == (parseInt(currentImg.id) + 1))
           // console.log(data,reqImg,currentImg.id)
            setCurrentImg(reqImg)
        }
else{
    setCurrentImg(data[0])
}
    }
    const handleClickLeft = () => {
      //  console.log(currentImg.id)
if(currentImg.id==0){
   // console.log('inside')
    setCurrentImg(data[data.length-1])
}
else{
    const reqImg = data.find(d => d.id == (parseInt(currentImg.id) -1))
  //  console.log(data,reqImg,currentImg.id)
    setCurrentImg(reqImg)
}
    }

    if (isLoading) {
        return <h1>loading...</h1>
    }
    else {
        return (
            <>
                <FaChevronLeft onClick={handleClickLeft} />
                {error ? { error } : (
                    currentImg && <img
                        style={{ width: '300px' }}
                        src={currentImg.download_url} key={currentImg.id} alt="not found" />

                )}
                {currentImg&&data.length>0&&[...Array(data.length)].map((e,idx)=><FaCircle key={idx} color={currentImg.id==idx?'yellow':'lightgray'}/>)}
                <FaChevronRight onClick={handleClickRight} />
            </>
        )
    }

}

export default ImageSlider;
