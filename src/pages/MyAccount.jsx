import React from 'react';

const MyAccount = () => {
  const userDetails = {
    username: 'ABC',
    email: 'abc@example.com',
    membership: 'Gold',
    address: '123 Main Street, City, Country',
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <div className="flex-1 p-8 max-w-screen-md mx-auto bg-white shadow-lg rounded-lg">
        <h2 className="border-b pb-4 text-3xl font-bold text-center text-gray-900">My Account</h2>
        <div className="mt-8 text-lg leading-relaxed">
          <p><strong>Username:</strong> {userDetails.username}</p>
          <p><strong>Email:</strong> {userDetails.email}</p>
          <p><strong>Membership:</strong> {userDetails.membership}</p>
          <p><strong>Address:</strong> {userDetails.address}</p>
        </div>
      </div>
      <footer className="bg-gray-200 py-4 text-center border-t border-gray-300 text-gray-600 mt-8">
        &copy; E-Commerce 2023
      </footer>
    </div>
  );
};

export default MyAccount;
