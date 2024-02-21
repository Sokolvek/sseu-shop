import React from "react";
import { useState } from "react";

export default function AddProduct() {
  const url = import.meta.env.VITE_BASE_URL;
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: 0,
  });
  const handleName = (e) => {
    setFormData({
      name: e.target.value,
      description: formData.description,
      price: formData.price,
    });
  };
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
    form.append("name", formData.name);
    form.append("description", formData.description);
    form.append("price", formData.price);
    const body = {
      "id":"421412421412",
      "name":formData.name,
      // "description":formData.description,
      // "price":formData.price
    }
    console.log(body)
    const response = await fetch(`${url}/products`, {
      method: "POST",
      body: JSON.stringify(body),
      // mode:"cors",
      headers: {
        "Content-Type": "application/json"
      }

    });
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
