import React from 'react';
import { Link } from 'react-router-dom';

const CategoriesSection = () => {
  return (
    <div className="text-center">
      <h2 className="mb-4 font-semibold text-2xl">Categories</h2>
      <div className="flex flex-col items-center">
        <Link
          to="/new-products"
          className="category-link my-2 bg-gray-600 hover:bg-gray-800 text-white py-2 px-6 rounded"
        >
          Electronics
        </Link>
        <Link
          to="/new-products"
          className="category-link my-2 bg-gray-600 hover:bg-gray-800 text-white py-2 px-6 rounded"
        >
          Clothing
        </Link>
        <Link
          to="/new-products"
          className="category-link my-2 bg-gray-600 hover:bg-gray-800 text-white py-2 px-6 rounded"
        >
          Appliances
        </Link>
        <Link
          to="/new-products"
          className="category-link my-2 bg-gray-600 hover:bg-gray-800 text-white py-2 px-6 rounded"
        >
          Personal Care
        </Link>
        <Link
          to="/new-products"
          className="category-link my-2 bg-gray-600 hover:bg-gray-800 text-white py-2 px-6 rounded"
        >
          Accessories
        </Link>
      </div>
    </div>
  );
};

export default CategoriesSection;
