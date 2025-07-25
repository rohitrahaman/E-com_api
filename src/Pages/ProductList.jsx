import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://ecom-rs8e.onrender.com/api/products")
      .then((res) => {
        const data = res.data?.data?.results;
        if (Array.isArray(data)) {
          setProducts(data);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
      {products.map((product) => (
        <div
          key={product._id}
          className="bg-white p-4 shadow rounded text-center"
        >
          <img
            src={product.photos?.[0] || "https://via.placeholder.com/100"}
            alt={product.title}
            className="h-32 w-full object-contain mb-2"
          />
          <h3 className="text-lg font-bold">{product.title}</h3>
          <p className="text-green-600 font-semibold">
            ৳ {product.current_price}
          </p>
          <button
            onClick={() => navigate(`/product/${product._id}`)}
            className="mt-3 px-4 py-2 bg-blue-600 text-white rounded"
          >
            View Details
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
