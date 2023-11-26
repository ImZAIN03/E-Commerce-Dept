import React from 'react';

const CategoriesSection = () => {
  return (
    <div className="text-center">
      <h2 className="mb-4 font-semibold text-2xl">Categories</h2>
      <select className="p-2 rounded border text-md">
        <option value="electronics">Electronics</option>
        <option value="clothing">Clothing</option>
        <option value="appliances">Appliances</option>
        <option value="personal care">Personal Care</option>
        <option value="accessories">Accessories</option>
      </select>
    </div>
  );
};

export default CategoriesSection;