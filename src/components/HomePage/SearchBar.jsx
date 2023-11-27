import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
        className="border-2 border-gray-500 px-3 py-2 rounded-xl w-80 focus:outline-none focus:border-blue-400"
      />
      <div
        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 cursor-pointer"
        onClick={handleSearch}
      >
        <BsSearch />
      </div>
    </div>
  );
};

export default SearchBar;
