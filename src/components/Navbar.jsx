import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 text-white mt-7 bg-black">
      {/* Brand Name */}
      <div className="text-2xl font-bold text-white">
        <h1>SIMRAN DEEP SINGH</h1>
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-4 text-xl">
        <ul className="flex space-x-6">
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
    </div>
  );
};

export default Navbar;
