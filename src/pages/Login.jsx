import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom';
import { auth } from '../Firebase';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((res) => alert("Login Success..."))
    .catch(err => alert(err.message))  
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleLogin} 
        className="w-full max-w-md p-8 bg-gray-100 shadow-lg rounded-lg border-2 border-amber-950"
      >
        <h2 className="text-3xl font-semibold text-center text-gray-700 mb-6">
          Log In
        </h2>
        
        <div className="mb-4">
          <label htmlFor="Email" className="block text-sm font-medium text-gray-700">
            Email:
          </label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-md text-sm mt-1 focus:outline-none focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-sky-800 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue"
        >
          Log In
        </button>
        <p className="text-lg text-center mt-6 font-semibold text-sky-700">
          Dont have an account? 
          <Link to="/signup" className="px-2 text-sky-700">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
