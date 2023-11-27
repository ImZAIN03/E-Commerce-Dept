// SearchBar.js
import React from 'react';
import { BsSearch } from 'react-icons/bs';

const SearchBar = () => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search..."
        className="border-2 border-gray-500 px-3 py-2 rounded-xl w-80 focus:outline-none focus:border-blue-400"
      />
      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600">
        <BsSearch />
      </div>
    </div>
  );
};

export default SearchBar;
