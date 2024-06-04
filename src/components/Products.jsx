import React, { useEffect, useRef, useState } from 'react'

const Products = () => {
  const [searchText,setSearchText]=useState("")
  const [searchedField,setSearchedFiled]=useState([]);
  let timer=useRef()
  const handleChange=(e)=>{
    setSearchText(e.target.value)
  }
  useEffect(()=>{
  timer.current=setTimeout(()=>fetchData(),1000)
  return ()=>clearInterval(timer.current )
  },[searchText])
  const fetchData=async()=>{
    const response=await fetch(`http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${searchText}`)
    const data=await response.json();
    setSearchedFiled(data[1])
    console.log(searchText,data)

  }
  return (
    <>
    <div>
     <input type="text" name="searchText" id="searchText" onChange={handleChange} value={searchText} />
    </div>
    {searchedField?.length>0?(<div>
      {searchedField.map(e=><li>{e}</li>)}
    </div>):null}
    </>
  )
}

export default Products
