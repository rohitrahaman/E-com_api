import { Store } from "lucide";
import React from "react";
import { Link } from "react-router";
import Login from "../Pages/Login";

function Hearder() {
  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-indigo-600">MyMart</h1>
        <nav className="space-x-6">
          <a href="#" className="text-gray-600 hover:text-indigo-600">
            Home
          </a>
          <Link to="/products" className="text-gray-600 hover:text-indigo-600">
            Product
          </Link>
          <Link to="/contact" className="text-gray-600 hover:text-indigo-600">
            Contact
          </Link>
          <Link to="/login" className="text-gray-600 hover:text-indigo-600">
            Sing In
          </Link>
          <a href="#" className="text-gray-600 hover:text-indigo-600">
            Sing Up
          </a>
        </nav>
        <button className="text-gray-600 hover:text-indigo-600">🛒</button>
      </div>
    </header>
  );
}

export default Hearder;
