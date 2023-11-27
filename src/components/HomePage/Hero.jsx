import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart, FiUser, FiBox, FiInfo, } from "react-icons/fi"; 

const Hero = () => {
  return (
    <div className="w-3/5 mx-auto my-1 flex items-center justify-between pt-2 font-semibold text-lg">
      <Link to="/new-products" className="flex items-center cursor-pointer">
        <FiBox className="mr-1" />
        New Products
      </Link>

      <Link to="/about-us" className="flex items-center cursor-pointer">
        <FiInfo className="mr-1" />
        About Us
      </Link>

      <Link to="/cart" className="flex items-center cursor-pointer">
        <FiShoppingCart className="mr-1" />
        Cart
      </Link>
      
      <Link to="/my-account" className="flex items-center cursor-pointer">
        <FiUser className="mr-1" />
        My Account
      </Link>

      

      
    </div>
  );
};

export default Hero;