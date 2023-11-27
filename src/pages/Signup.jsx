import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../Firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
    .then((response) => {
        alert("Account Created");
    })
    .catch((err) => alert(err.message));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSignup}
        className="w-full max-w-md p-8 bg-gray-100 shadow-lg rounded-lg border-2 border-amber-950"
      >
        <h2 className="text-3xl font-semibold text-center text-gray-700 mb-6">Sign Up</h2>
        <div className="mb-4">
          <label htmlFor="signup-username" className="block text-sm font-medium text-gray-700">
            Username:
          </label>
          <input
            type="text"
            id="signup-username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 border rounded-md text-sm mt-1 focus:outline-none focus:border-blue-500"
          />
          <label htmlFor="signup-email" className="mt-3 block text-sm font-medium text-gray-700">
            Email:
          </label>
          <input
            type="email"
            id="signup-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-md text-sm mt-1 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="signup-password" className="block text-sm font-medium text-gray-700">
            Password:
          </label>
          <input
            type="password"
            id="signup-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-md text-sm mt-1 focus:outline-none focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-sky-800 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue"
        >
          Sign Up
        </button>
        <p className="text-lg text-center mt-6 font-semibold text-sky-700">
          Already have an account? 
          <Link to="/login" className="px-2 text-sky-700">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
