import React, { useEffect, useState } from "react";
import axios from "axios";

const BrandList = () => {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://ecom-rs8e.onrender.com/api/brands")
      .then((res) => {
        const data = res.data?.data?.results;
        if (Array.isArray(data)) {
          setBrands(data);
        } else {
          setError("Invalid data format");
          console.error("Expected array, got:", data);
        }
        setLoading(false);
      })
      .catch((err) => {
        setError("Something went wrong while fetching brands.");
        setLoading(false);
        console.error("Axios Error:", err);
      });
  }, []);

  if (loading) return <p className="p-4">Loading...</p>;
  if (error) return <p className="p-4 text-red-600">{error}</p>;

  return (
    <div className="p-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
      {brands.map((brand) => (
        <div
          key={brand._id}
          className="bg-white rounded shadow p-4 text-center"
        >
          <img
            src={brand.icon || "https://via.placeholder.com/80"}
            alt={brand.title || "Brand"}
            className="w-16 h-16 mx-auto mb-2 object-contain"
          />
          <h3 className="text-lg font-semibold">{brand.title || "Untitled"}</h3>
        </div>
      ))}
    </div>
  );
};

export default BrandList;
