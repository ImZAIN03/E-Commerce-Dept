import React, { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../Firebase';

const MyAccount = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 items-center justify-center">
      <div className="w-full p-8 max-w-screen-md bg-white shadow-lg rounded-lg">
        <h2 className="border-b pb-4 text-3xl font-bold text-center text-gray-900 ">My Account</h2>
        <div className="mt-6 text-lg leading-relaxed">
          {loading ? (
            <p className="text-gray-600">Loading user data...</p>
          ) : user ? (
            <div className="text-center">
              <p className="text-2xl font-semibold mb-2">
                Welcome, 
              </p>
              <p className="text-lg text-gray-700">
                <strong>Email:</strong> {user.email}
              </p>
            </div>
          ) : (
            <p className="text-red-500">Failed to load user data. Please try again later.</p>
          )}
        </div>
      </div>
      <footer className="bg-gray-200 px-3 py-4 text-center border-t border-gray-300 text-gray-900 mt-6 rounded-lg">
        &copy; E-Commerce App 2023
      </footer>
    </div>
  );
};

export default MyAccount;
