import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart, FiUser, FiBox, FiInfo } from "react-icons/fi"; // Import icons from react-icons

const Hero = () => {
  return (
    <div className="w-2/5 mx-auto flex items-center justify-between  py-4 ">
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
