import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addQty, removeQty } from '../store/cartSlice';

const Cart = () => {
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart.items)

console.log(cartItems)
const handleClickAddQty=(id)=>{
  dispatch(addQty(id))
}
const handleClickRemoveQty=(id)=>{
  dispatch(removeQty(id))
}
  return (
    <div>
      {cartItems?.length>0&&cartItems.map(item=>{
        return(
          <div key={item.id}>
          <li>{item.title}</li>
          <span>{item.qty}</span>
          <button onClick={()=>handleClickAddQty(item.id)}>add</button>
          <button onClick={()=>handleClickRemoveQty(item.id)}>remove</button>
          </div>
        )
      })}
    </div>
  )
}

export default Cart;
