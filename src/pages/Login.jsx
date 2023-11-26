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
    if (username === 'user' && password === 'password') {
      console.log('Login successful');
    } else {
      setError('Invalid username or password');
    }
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    console.log('Signup details:', signupUsername, signupPassword);
  };

  const toggleForm = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={showLogin ? handleLoginSubmit : handleSignupSubmit}
        className="w-full max-w-md p-8 bg-gray-100 shadow-lg rounded-lg border-2 border-amber-950"
      >
        <h2 className="text-3xl font-semibold text-center text-gray-700 mb-6">
          {showLogin ? 'Log In' : 'Sign Up'}
        </h2>
        {error && <p className="text-red-500 text-center mb-6">{error}</p>}
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">
            Username:
          </label>
          <input
            type="text"
            id="username"
            value={showLogin ? username : signupUsername}
            onChange={(e) => (showLogin ? setUsername(e.target.value) : setSignupUsername(e.target.value))}
            className="w-full px-4 py-2 border rounded-md text-sm mt-1 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={showLogin ? password : signupPassword}
            onChange={(e) => (showLogin ? setPassword(e.target.value) : setSignupPassword(e.target.value))}
            className="w-full px-4 py-2 border rounded-md text-sm mt-1 focus:outline-none focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-sky-800 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue"
        >
          {showLogin ? 'Log In' : 'Sign Up'}
        </button>
        <p className="text-lg text-center mt-6 font-semibold text-blue-700 cursor-pointer" onClick={toggleForm}>
          {showLogin ? "Don't have an account? Sign Up" : 'Already have an account? Log In'}
        </p>
      </form>
    </div>
  );
};

export default Login;
