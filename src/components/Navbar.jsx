import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';  // Updated import
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../Firebase';
import SearchBar from './HomePage/SearchBar';

const Navbar = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();  // Updated hook

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log('User logged out');
      })
      .catch((error) => {
        console.error('Error signing out:', error);
      });
  };

  const handleSearch = (searchTerm) => {
    console.log('Searching for:', searchTerm);

    // Redirect to the "/new-products" route using navigate
    navigate('/new-products');
  };

  return (
    <div className="bg-gradient-to-r from-gray-300 to-gray-400 sticky top-0 bg-white z-50">
      <div className="flex justify-between items-center container mx-auto py-2">

        <div className="flex items-center pl-20">
          <Link to="/">
            <img src='/src/assets/logo.png' alt='Logo' className='w-20 object-fill' />
          </Link>
        </div>

        <div className="flex justify-center flex-1">
          {/* Use the SearchBar component here and pass handleSearch function */}
          <SearchBar onSearch={handleSearch} />
        </div>

        {user ? (
          <div className="flex items-center">
            <p className="text-gray-800 font-semibold mr-4">{user.displayName}</p>
            <button
              onClick={handleLogout}
              className="mr-5 px-5 py-3 flex items-center cursor-pointer rounded-full text-gray-800 bg-white font-semibold border"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link to="/login" className="mr-10 px-5 py-3 flex items-center cursor-pointer rounded-full text-gray-800 bg-white font-semibold border">
            Log In
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
