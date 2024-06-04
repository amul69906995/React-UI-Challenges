import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { add, remove } from '../store/cartSlice';

const CartProducts = () => {
    const [products, setProducts] = useState([])
    const cartItems = useSelector((state) => state.cart.items)
    const dispatch = useDispatch()
    useEffect(() => {

        fetchData();
    }, [])
    const fetchData = async () => {
        const res = await fetch('https://dummyjson.com/products');
        const data = await res.json();
        console.log(data)
        setProducts(data?.products)
    }

    const handleClickAdd = (p) => {
        dispatch(add(p))
    }
    const handleClickRemove = (p) => {
        dispatch(remove(p))
    }
    return (
        <>
            <h1>products</h1>
            <h4>cart items {cartItems.length}</h4>
            <div>
                {products.map(p => {
                    return (
                        <div key={p.id}>
                            <li>{p.title}</li>
                            <span>rs.{p.price}</span>
                            {!cartItems.find(i=>i.id===p.id)? <button onClick={() => handleClickAdd(p)}>add to cart</button> : <button onClick={() => handleClickRemove(p)}>remove from cart</button>}


                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default CartProducts
