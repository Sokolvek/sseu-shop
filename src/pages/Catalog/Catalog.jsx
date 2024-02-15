import React from "react";
import { useState, useEffect } from "react";

export default function Catalog() {
  const url = import.meta.env.VITE_BASE_URL;
  let [products, setProducts] = useState([]);
  async function fetchProducts() {
    const response = await fetch(`${url}/product`);
    const data = await response.json();
    setProducts(data);
    setTimeout(() => {
      console.log(products, data.products);
    }, 1000);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <section>
      <div>Products</div>
      <ul>
        {products.map((product) => (
          <li key={product._id} className="flex flex-col p-3 max-w-44">
            <div className="product-image">
              <img
                className="w-fit"
                src="../src/assets/imgs/meteor.jpg"
                alt=""
              />
            </div>
            <span className="product-title">{product.name}</span>
            <span className="product-price">{product.price}$</span>
            <button className="add-to-cart text-white bg-black">
              Add to cart
            </button>
          </li>
        ))}
      </ul>
      {/* {products.map((item) =>
    item)} */}
    </section>
  );
}
