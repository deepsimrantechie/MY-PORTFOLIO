import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black text-white p-4">
      <div className="flex items-center justify-between">
        {/* Brand Name */}
        <div className="text-2xl font-bold">
          <h1>SIMRAN DEEP SINGH</h1>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
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
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
        </div>

        {/* Navigation Links for Desktop */}
        <div className="hidden md:flex space-x-6 text-xl">
          <ul className="flex space-x-6">
            <li className="hover:text-gray-400 transition duration-200">
              Home
            </li>
            <li className="hover:text-gray-400 transition duration-200">
              About
            </li>
            <li className="hover:text-gray-400 transition duration-200">
              Journey
            </li>
            <li className="hover:text-gray-400 transition duration-200">
              Projects
            </li>
            <li className="hover:text-gray-400 transition duration-200">
              Domain
            </li>
            <li className="hover:text-gray-400 transition duration-200">
              Contact
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden mt-4 space-y-4 text-lg`}
      >
        <ul className="flex flex-col space-y-4">
          <li className="hover:text-gray-400 transition duration-200">Home</li>
          <li className="hover:text-gray-400 transition duration-200">About</li>
          <li className="hover:text-gray-400 transition duration-200">
            Journey
          </li>
          <li className="hover:text-gray-400 transition duration-200">
            Projects
          </li>
          <li className="hover:text-gray-400 transition duration-200">
            Domain
          </li>
          <li className="hover:text-gray-400 transition duration-200">
            Contact
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
