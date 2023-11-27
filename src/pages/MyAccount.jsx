import React, { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../Firebase'; 

const MyAccount = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <div className="flex-1 p-8 max-w-screen-md mx-auto bg-white shadow-lg rounded-lg">
        <h2 className="border-b pb-4 text-3xl font-bold text-center text-gray-900">My Account</h2>
        <div className="mt-8 text-lg leading-relaxed">
          {user ? (
            <>
              <p><strong>Email:</strong> {user.email}</p>
            </>
          ) : (
            <>
              <p>Loading user data...</p>
            </>
          )}
        </div>
      </div>
      <footer className="bg-gray-200 py-4 text-center border-t border-gray-300 text-gray-600 mt-8">
        &copy; E-Commerce 2023
      </footer>
    </div>
  );
};

export default MyAccount;
