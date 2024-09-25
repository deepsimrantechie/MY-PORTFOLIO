import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center py-10 px-4 bg-black">
      {/* Hero Left Side */}
      <div className="w-full sm:w-1/2 flex flex-col items-start justify-center text-center sm:text-left">
        <div className="text-white mb-4">
          <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
            <p className="w-10 h-[2px] bg-white"></p>
            <p className="text-xl sm:text-3xl font-bold text-white">
              Full Stack Developer
            </p>
            {/* Adjusted font size for mobile */}
          </div>
          <h1 className="text-lg sm:text-2xl leading-relaxed mb-4 text-gray-300">
            {/* Adjusted heading size for mobile */}
            Hi, I'm Simran Deep Singh, a B.Tech student in my third year,
            specializing in full-stack development with the MERN stack.
          </h1>
          <p className="text-base sm:text-xl text-gray-400 leading-relaxed mb-2">
            {/* Adjusted paragraph size for mobile */}I have a solid grasp of
            data structures, algorithms, and statistics, and I’ve worked on
            numerous projects, enhancing my analytical skills.
          </p>
          <p className="text-base sm:text-xl text-gray-400 leading-relaxed mb-4">
            {/* Adjusted paragraph size for mobile */}
            With experience in UI/UX design from my internship, I create
            user-friendly interfaces using Figma to improve the overall user
            experience.
          </p>

          <div className="flex items-center justify-center sm:justify-start gap-2 mt-4">
            <p className="w-10 h-[1px] bg-white"></p>
          </div>
        </div>
      </div>

      {/* Hero Right Side */}
      <div className="w-full sm:w-1/2 flex justify-center mt-6 sm:mt-0">
        <img
          src={assets.me_img}
          alt="Simran Deep Singh"
          className="w-56 h-56 sm:w-72 sm:h-72 lg:w-96 lg:h-96 rounded-full object-cover shadow-lg" // Scaled for smaller screens
        />
      </div>
    </div>
  );
};

export default Header;
