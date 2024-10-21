import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logged in");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 flex items-center justify-center relative">
      
      <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: 'url(/images/launch.jpg)' }}></div>
      
    
      <div className="relative bg-white bg-opacity-10 backdrop-filter backdrop-blur-md border border-white border-opacity-30 p-10 rounded-2xl shadow-xl w-[400px] sm:w-[460px] transform transition-all hover:shadow-2xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-100 mb-6 text-center">
          Welcome Back
        </h2>
        <p className="text-center text-gray-300 mb-6">Please login to your account</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-lg text-gray-200 font-semibold mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-gray-700 bg-opacity-20 border border-gray-400 text-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200 ease-in-out"
              placeholder="Enter your email"
              required
            />
          </div>
          
          <div className="mb-6">
            <label className="block text-lg text-gray-200 font-semibold mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-gray-700 bg-opacity-20 border border-gray-400 text-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200 ease-in-out"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all focus:ring-4 focus:ring-blue-300"
          >
            Login
          </button>
        </form>

        <div className="text-center mt-4">
          <a href="#" className="text-slate-100 hover:text-blue-500 font-semibold transition-colors duration-200 ease-in-out">
            Forgot your password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
