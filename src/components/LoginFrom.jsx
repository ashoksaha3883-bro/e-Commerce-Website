


// LoginForm.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!email || !password) {
      alert('Please enter both email and password');
      return;
    }

    // In a real app, send a request to your backend
    onLogin(email);
    navigate('/'); // redirect to home after login
  };

  return (
    <form className="bg-white p-6 rounded-lg shadow-xl w-80 mx-auto mt-10" onSubmit={handleSubmit}>
      <h2 className="text-xl font-bold mb-4 text-center">Login</h2>

      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-300 text-black text-sm rounded-md block w-full px-3 py-2"
          placeholder="name@gmail.com"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium text-gray-700">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-gray-300 text-black text-sm rounded-md block w-full px-3 py-2"
          placeholder="••••••••"
          required
        />
      </div>

      <button
        type="submit"
        className="text-white bg-blue-500 w-full  rounded-md text-sm px-4 py-2.5 hover:bg-blue-600"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;