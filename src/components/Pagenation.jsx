import React from 'react'
import { useState,useEffect } from 'react'

const Pagenation = () => {
  
  const [products, setProducts] = useState([])
  const [productPerPage,setProductPerPage]=useState(10)
  const [currentPage,setCurrentPage]=useState(4)
  useEffect(() => {
    fetchData();
}, [currentPage,productPerPage])
const fetchData = async () => {
    const res = await fetch(`https://dummyjson.com/products?limit=${productPerPage}&skip=${10*(currentPage-1)}`);
    const data = await res.json();
    console.log(data)
    setProducts(data?.products)
}
  return (
    <>
    <h1>{currentPage}</h1>
    <div>
      { products.map(p=><li>{p.title}</li>) }
    </div>
    <div>
   <button onClick={()=>setCurrentPage(currentPage-1)}>prev</button>
   <input type="text" value={productPerPage} max={30} min={10} />
   <button onClick={()=>setCurrentPage(currentPage+1)}>next</button>
    </div>
    </>
  )
}

export default Pagenation;

