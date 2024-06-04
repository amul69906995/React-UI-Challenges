import React, { useEffect, useState } from 'react'

const FilterProducts = () => {
  const [products, setProducts] = useState([])
  const [currCategory,setCurrCategory]=useState("")
  const [filteredProducts, setFilteredProducts] = useState([])
  useEffect(() => {

    fetchData();
}, [])
const fetchData = async () => {
    const res = await fetch('https://dummyjson.com/products');
    const data = await res.json();
    console.log(data)
    setProducts(data?.products)
}
const uniqueCategory=products?.length>0&&[... new Set(products.map(item=>{
  return item.category;
}))]

useEffect(()=>{
  if(!currCategory)setFilteredProducts(products);
  else{
  setFilteredProducts(products.filter(item=>item.category===currCategory))
  }
},[currCategory])
  return (
    <>
    <button onClick={()=>setCurrCategory("")}>home</button>
    {uniqueCategory.length>0&&uniqueCategory.map(u=><button onClick={()=>setCurrCategory(u)}>{u}</button>)}
         {filteredProducts.map(p => {
                    return (
                        <div key={p.id}>
                            <span>{p.title}</span>
                            <br />
                            <span style={{backgroundColor:'lightgreen'}}>{p.category}</span>
                        </div>
                    )
                })}
    </>
  )
}

export default FilterProducts
