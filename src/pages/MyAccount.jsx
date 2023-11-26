import React from 'react';

const MyAccount = () => {
  // Dummy user details
  const userDetails = {
    username: 'ABC',
    email: 'abc@example.com',
    membership: 'Gold', // Membership level
    address: '123 Main Street, City, Country',
    // ... other details
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <div style={{ flex: '1', padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
        <h2 style={{ borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>My Account</h2>
        <div style={{ marginTop: '20px', textAlign: 'left', fontSize: '25px' }}>
          <p><strong>Username:</strong> {userDetails.username}</p>
          <p><strong>Email:</strong> {userDetails.email}</p>
          <p><strong>Membership:</strong> {userDetails.membership}</p>
          <p><strong>Address:</strong> {userDetails.address}</p>
          {/* Include other user details */}
        </div>
      </div>
      <footer style={{ backgroundColor: '#f5f5f5', padding: '10px', textAlign: 'center' }}>
        &copy; Your Website 2023
      </footer>
    </div>
  );
};

export default MyAccount;