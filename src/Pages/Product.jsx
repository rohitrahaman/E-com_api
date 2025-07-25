import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzlhMGExN2IwOWY3NTFiZDIyMzlkMjgiLCJmaXJzdF9uYW1lIjoiTWVza2F0dWwiLCJsYXN0X25hbWUiOiJJc2xhbSIsImVtYWlsIjoiYWRtaW5AbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGhvbmUiOiIwMTc1NDY1ODc4MSIsInBob25lX3ZlcmlmaWVkIjpmYWxzZSwiYXZhdGFyX3VybCI6bnVsbCwiY2l0eSI6IkNoYXR0b2dyYW0iLCJyb2xlIjoxLCJpYXQiOjE3MzgxNDg1NDMsImV4cCI6MTczODc1MzM0M30.MbUlpNkp95rj9adHxb6vNQ7fG50sgDuB8eed3UyuZts";

  useEffect(() => {
    axios
      .get("https://ecom-rs8e.onrender.com/api/products", {
        headers: {
          token: token,
        },
      })
      .then((res) => {
        setProducts(res.data.data || []);
      })
      .catch((err) => {
        console.error(
          "Product Fetch Error:",
          err.response?.status,
          err.message
        );
      });
  }, []);

  return (
    <div className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <div key={product._id} className="border rounded shadow p-4">
          <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
          <p className="text-sm text-gray-500 mb-1">
            Brand: {product.brand?.title}
          </p>
          <p className="text-lg font-bold text-green-600">
            ৳ {product.current_price}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
