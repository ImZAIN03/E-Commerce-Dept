import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="flex justify-between px-4 py-3 bg-gradient-to-r from-gray-300 to-gray-700">
      <div className="flex items-center">
        <img
          src="/src/assets/logo.png"  
          alt="E-Commerce"
          className="w-20 object-fill"  
        />
      </div>

      <div className="flex items-center space-x-4 font-semibold">
        <Link to="/about-us" className="text-white">About Us</Link>
        <Link to="/new-products" className="text-white">New Products</Link>
        <Link to="/cart" className="text-white">Cart</Link>
      </div>
    </div>
  );
};

export default Footer;
