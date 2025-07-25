import React from "react";
import { removeToken } from "../utils/auth";
import { useNavigate } from "react-router-dom";
import Hearder from "./Hearder";
import ProductList from "./ProductList";

const Dashboard = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    removeToken();
    navigate("/login");
  };

  return (
    <div className="p-6 space-y-4">
      <Hearder />
      <ProductList />
      <h1 className="text-3xl font-bold">Explore more specific</h1>
      <div className="space-x-4">
        <button
          onClick={() => navigate("/brands")}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Brands
        </button>
        <button
          onClick={() => navigate("/categories")}
          className="bg-purple-500 text-white px-4 py-2 rounded"
        >
          Categories
        </button>
      </div>
      <button
        onClick={handleLogout}
        className="mt-4 bg-red-600 text-white px-4 py-2 rounded"
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
