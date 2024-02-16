import React from 'react'
import { useState } from 'react'

export default function AddProduct() {
    const url = import.meta.env.VITE_BASE_URL;
    const[formData, useFormData] = useState({
        name:"",
        description:"",
        price:0
    })
    const [like, setLike] = useState("")
    const handleName = (e) =>{
        useFormData({
            name:e.target.value,
            description:formData.description,
            price:formData.price
        })
    }
    const handleDescription = (e) => {
        useFormData({
            name:formData.name,
            description:e.target.value,
            price:formData.price
        })
    }
    
    const handlePrice = (e) => {
        useFormData({
            name:formData.name,
            description:formData.description,
            price:e.target.value
        })
    }

    const addProduct = async (e) => {
        e.preventDefault()
        const form = new FormData()
        form.append("name", formData.name)
        form.append("description", formData.description)
        form.append("price", formData.price)
        const response = await fetch(`${url}/product`,{
            method:"POST",
            mode:"cors",
            body:JSON.stringify(formData),
             headers: {
                "Access-Control-Allow-Origin" : "*",
                //  'Origin': 'http://localhost:5000', // Замените на ваш домен
                 'Content-Type': 'application/json' // Замените на нужный тип контента
               },
        })

    }

    return (
    <section>
        <form className="mt-48" action="">
            {formData.name}
            <input type="text" onChange={(e) => handleName(e)} placeholder="product name" value={formData.name} />
            <input type="text" onChange={(e) => handleDescription(e)} placeholder="product desc" value={formData.description} />
            <input type="text" onChange={(e) => handlePrice(e)} placeholder="price" value={formData.price} />
            <button onClick={(e) => addProduct(e)}>send data</button>
            {formData.name +" " + formData.description + " " + formData.price}
        </form>
    </section>
  )
}
