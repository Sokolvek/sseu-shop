import React, { useEffect } from 'react'
import useStore from "../../store/store";
export default function Cart() {
  const {cart} = useStore()
  useEffect(() =>{
    cart.push([1,2,3,4])
    console.log("cart",cart)
  },[])
    return (
    <section>
        <h2>Cart</h2>
        <ul>
            {cart.map((item) => (
                <div>a{item}</div>
            ))}
        </ul>
    </section>
  )
}
