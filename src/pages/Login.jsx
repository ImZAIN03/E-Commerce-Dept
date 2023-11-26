import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showLogin, setShowLogin] = useState(true);
  const [signupUsername, setSignupUsername] = useState('');
  const [signupPassword, setSignupPassword] = useState('');

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Perform validation/authentication here
    if (username === 'user' && password === 'password') {
      // Redirect or perform action upon successful login
      console.log('Login successful');
    } else {
      setError('Invalid username or password');
    }
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // Perform signup functionality or validation here
    console.log('Signup details:', signupUsername, signupPassword);
    // You can add your logic to handle signup actions here
  };

  const toggleForm = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f5f5f5' }}>
      {showLogin ? (
        <form
          onSubmit={handleLoginSubmit}
          style={{ width: '300px', padding: '30px', border: '1px solid #ccc', borderRadius: '10px', backgroundColor: '#fff', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}
        >
          <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#333' }}>Log In</h2>
          {error && <p style={{ color: 'red', marginBottom: '20px', textAlign: 'center' }}>{error}</p>}
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="username" style={{ display: 'block', marginBottom: '5px', color: '#333' }}>Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', fontSize: '14px' }}
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="password" style={{ display: 'block', marginBottom: '5px', color: '#333' }}>Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', fontSize: '14px' }}
            />
          </div>
          <button type="submit" style={{ width: '100%', padding: '10px 15px', borderRadius: '5px', background: '#007bff', color: '#fff', border: 'none', cursor: 'pointer', fontSize: '16px', fontWeight: 'bold' }}>Log In</button>
          <p style={{ textAlign: 'center', marginTop: '15px', cursor: 'pointer', color: '#007bff', textDecoration: 'underline' }} onClick={toggleForm}>Don't have an account? Sign Up</p>
        </form>
      ) : (
        <form
          onSubmit={handleSignupSubmit}
          style={{ width: '300px', padding: '30px', border: '1px solid #ccc', borderRadius: '10px', backgroundColor: '#fff', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}
        >
          <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#333' }}>Sign Up</h2>
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="signupUsername" style={{ display: 'block', marginBottom: '5px', color: '#333' }}>Username:</label>
            <input
              type="text"
              id="signupUsername"
              value={signupUsername}
              onChange={(e) => setSignupUsername(e.target.value)}
              style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', fontSize: '14px' }}
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="signupPassword" style={{ display: 'block', marginBottom: '5px', color: '#333' }}>Password:</label>
            <input
              type="password"
              id="signupPassword"
              value={signupPassword}
              onChange={(e) => setSignupPassword(e.target.value)}
              style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', fontSize: '14px' }}
            />
          </div>
          <button type="submit" style={{ width: '100%', padding: '10px 15px', borderRadius: '5px', background: '#007bff', color: '#fff', border: 'none', cursor: 'pointer', fontSize: '16px', fontWeight: 'bold' }}>Sign Up</button>
          <p style={{ textAlign: 'center', marginTop: '15px', cursor: 'pointer', color: '#007bff', textDecoration: 'underline' }} onClick={toggleForm}>Already have an account? Log In</p>
        </form>
      )}
    </div>
  );
};

export default Login;