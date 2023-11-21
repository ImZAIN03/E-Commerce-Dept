import React from 'react';
import { BsSearch } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="bg-gradient-to-r from-gray-300 to-gray-400 sticky top-0 bg-white z-50">
      <div className="flex justify-between items-center container mx-auto py-2">

        <div className="flex items-center">
          <Link to="/">
            <img src='/src/assets/logo.png' alt='Logo' className='w-20 object-fill' />
          </Link>
        </div>

        <div className="flex items-center">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="border-2 border-gray-500 px-2 py-1 rounded w-80" 
            />
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
              <BsSearch />
            </div>
          </div>
        </div>

        <div className="flex items-center">
          <button className="ml-4 bg-gray-700 text-white px-3 py-2 rounded">
            Sign In/Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
