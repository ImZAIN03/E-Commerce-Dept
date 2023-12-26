import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex justify-between items-center px-4 py-3 bg-gradient-to-r from-gray-300 to-gray-700">
      <div className="flex items-center">
        <Link to="/" className="text-white">
          <img
            src="/src/assets/logo.png"
            alt="E-Commerce"
            className="w-20 object-fill"
          />
        </Link>
      </div>

      <div className="flex items-center space-x-4 font-semibold">
        <Link to="/about-us" className="text-white hover:text-sky-400 transition duration-300">
          About Us
        </Link>
        <Link to="/new-products" className="text-white hover:text-sky-400 transition duration-300">
          New Products
        </Link>
        <Link to="/cart" className="text-white hover:text-sky-400 transition duration-300">
          Cart
        </Link>
      </div>
    </div>
  );
};

export default Footer;
