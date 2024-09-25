import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center py-10 px-4 bg-black">
      {/* Hero Left Side */}
      <div className="w-full sm:w-1/2 flex flex-col items-start justify-center">
        <div className="text-white mb-4">
          <div className="flex items-center gap-2 mb-2">
            <p className="w-10 h-[2px] bg-white"></p>
            <p className="text-3xl font-bold text-white">
              Full Stack Developer
            </p>
            {/* Increased font size */}
          </div>
          <h1 className="prata-regular text-2xl leading-relaxed mb-4 text-gray-300">
            {/* Increased heading size */}
            Hi, I'm Simran Deep Singh, a B.Tech student in my third year,
            specializing in full-stack development with the MERN stack.
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed mb-2">
            {/* Increased paragraph size */}I have a solid grasp of data
            structures, algorithms, and statistics, and I’ve worked on numerous
            projects, enhancing my analytical skills.
          </p>
          <p className="text-xl text-gray-400 leading-relaxed mb-4">
            {/* Increased paragraph size */}
            With experience in UI/UX design from my internship, I create
            user-friendly interfaces using Figma to improve the overall user
            experience.
          </p>

          <div className="flex items-center gap-2 mt-4">
            <p className="w-10 h-[1px] bg-white"></p>
          </div>
        </div>
      </div>

      {/* Hero Right Side */}
      <div className="w-full sm:w-1/2 flex justify-center mt-6 sm:mt-0">
        <img
          src={assets.me_img}
          alt="Simran Deep Singh"
          className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full object-cover shadow-lg" // Increased size for the image
        />
      </div>
    </div>
  );
};

export default Header;
