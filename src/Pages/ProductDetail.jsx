import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { getToken } from "../utils/auth";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = getToken();

    axios
      .get(`https://ecom-rs8e.onrender.com/api/products/id/${id}`, {
        headers: {
          token: token,
        },
      })
      .then((res) => {
        const data = res.data?.data;
        setProduct(data);
      })
      .catch((err) => {
        setError("Product not found or unauthorized");
        console.error("Product Fetch Error:", err);
      });
  }, [id]);

  if (error) return <p className="p-4 text-red-600">{error}</p>;
  if (!product) return <p className="p-4">Loading...</p>;

  return (
    <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
      <img
        src={product?.photos?.[0] || "https://via.placeholder.com/300"}
        alt={product.title}
        className="w-full h-auto rounded shadow object-contain"
      />
      <div>
        <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
        <p className="text-xl text-green-600 font-semibold mb-2">
          ৳ {product.current_price}
        </p>
        <p className="text-gray-700 mb-2">{product.description}</p>
        <p className="text-sm text-gray-500">
          Brand: {product.brand?.title} | Category: {product.category?.title}
        </p>
      </div>
    </div>
  );
};

export default ProductDetail;
