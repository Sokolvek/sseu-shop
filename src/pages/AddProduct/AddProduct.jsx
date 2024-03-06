import React from "react";
import { useState } from "react";

export default function AddProduct() {
  const url = import.meta.env.VITE_BASE_URL;
  const [file, setFile] = useState()
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: 0,
  });
  let fileUrl = "https://upcdn.io/12a1yrc/raw/uploads/2024/03/06/4kmhYvd486-file.png"
  const handleFile = (e) => {
    setFile(e)
  }
  const handleName = (e) => {
    setFormData({
      name: e.target.value,
      description: formData.description,
      price: formData.price,
    });
  };

  const uploadFile = async () =>{
    
    let url = "https://api.bytescale.com/v2/accounts/12a1yrc/uploads/binary"
    const form = new FormData()
    form.append("file",file)
    console.log(form.get(file), file)
    await fetch(url, {
      method:"POST",
      headers:{
        "Authorization":"Bearer public_12a1yrcATtWV8bcNHskHYdRAufq7"
      },
      body: file
    }).then((data) => data.json())
    .then((res) => fileUrl = res.fileUrl)
    
  }

  const handleDescription = (e) => {
    setFormData({
      name: formData.name,
      description: e.target.value,
      price: formData.price,
    });
  };
  const handlePrice = (e) => {
    setFormData({
      name: formData.name,
      description: formData.description,
      price: e.target.value,
    });
  };

  const addProduct = async (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append("name", "test");
    form.append("description", "testd")
    form.append("price", 0)
    // form.append("file", fileUrl)
    const headers = new Headers();
  headers.append('Content-Type', 'application/json');
    const response = await fetch(`${url}/products`, {
      method: "POST",
      body: JSON.stringify({
        "name":"test",
        "description":"desc",
        "price":0,
        "image":fileUrl
      }),
      headers:headers
    });
    const res = await response.json()
    console.log(res)
  };

  return (
    <section className="h-screen flex justify-center items-center bg-slate-900">
      <div className="max-w-md mx-auto p-8 bg-gray-800 rounded-md shadow-md form-container">
        <h2 className="text-2xl font-semibold text-white mb-6">
          Add your meteorite!
        </h2>
        <form className="w-96" method="POST">
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-bold mb-2">
              Meteorite Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleName(e)}
              id="name"
              name="name"
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-700 text-white"
            />
            {formData.name}
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-bold mb-2">
              Meteorite price
            </label>
            <input
              type="number"
              //   pattern="[0-9]"
              value={formData.price}
              onChange={(e) => handlePrice(e)}
              //   min={0.1}
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-700 text-white"
            />
            {formData.price}
          </div>
          <div className="mb-6">
            <label className="block text-gray-300 text-sm font-bold mb-2">
              Meteorite Description
            </label>
            <textarea
              id="message"
              name="message"
              onChange={(e) => handleDescription(e)}
              rows="4"
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-700 text-white"
            ></textarea>
            <input type="file" onChange={(e) => setFile(e.target.files[0])}/>
          </div>
          <button
            onClick={(e) => addProduct(e)}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
          >
            Add Meteorite
          </button>
        </form>
      </div>
    </section>
  );
}
