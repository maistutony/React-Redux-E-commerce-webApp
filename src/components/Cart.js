import React from 'react'
import { useSelector } from 'react-redux'
function Cart() {
  const products=useSelector(state=>state.products)
  console.log(products)
  return (
    <div>Cart</div>
  )
}

export default Cart