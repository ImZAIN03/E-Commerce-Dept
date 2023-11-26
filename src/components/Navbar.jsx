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

        <div className="flex justify-center flex-1">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="border-2 border-gray-500 px-3 py-2 rounded-lg w-80 focus:outline-none focus:border-blue-400"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600">
              <BsSearch />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Navbar;