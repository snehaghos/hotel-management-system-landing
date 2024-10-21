import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gradient-to-b from-black to-transparent absolute z-10 py-4 px-6 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <img src="/images/logo.png" alt="Logo" className="h-10" />


        <button
          className="text-gray-100 md:hidden"
          onClick={toggleMenu}
        >
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

      

        <div className="hidden md:flex gap-3">
      
            <Link to="/" className="hover:text-blue-400  text-white px-3 py-2">Home</Link>
            <Link to="/about" className="hover:text-blue-400  text-white px-3 py-2">About</Link>
            <Link to="/contact" className="hover:text-blue-400  text-white px-3 py-2">Contact</Link>
     
          <Link to="/book" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-400 transition-colors">Book Now</Link>
          <Link to="/login" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-400 transition-colors">Login</Link>
        </div>
      </div>

  
      <div className={`fixed top-0 left-0 w-[50%] h-[50%] bg-black bg-opacity-80 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
        <div className="relative flex flex-col p-10 h-full gap-6">
    
          <button
            className="absolute top-6 right-6 text-gray-100"
            onClick={toggleMenu}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <Link to="/" className="text-gray-100 text-lg hover:text-blue-400" onClick={toggleMenu}>Home</Link>
          <Link to="/about" className="text-gray-100 text-lg hover:text-blue-400" onClick={toggleMenu}>About</Link>
          <Link to="/contact" className="text-gray-100 text-lg hover:text-blue-400" onClick={toggleMenu}>Contact</Link>

          <Link to="/book" className="   text-gray-100 text-lg hover:text-blue-400" onClick={toggleMenu}>Book Now</Link>
          <Link to="/login" className="  text-gray-100 text-lg hover:text-blue-400" onClick={toggleMenu}>Login</Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
