import React from "react";
import { assets } from "../assets/assets";

const Parkingsol = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center mt-16 px-4 lg:px-20 space-y-10 lg:space-y-0">
      {/* Left side - Image */}
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
        <img
          src={assets.park_img}
          alt="Parking Solution"
          className="w-4/5 h-auto rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out"
        />
      </div>

      {/* Right side - Text */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-6 lg:pl-10">
        <h1 className="text-4xl lg:text-4xl font-semibold text-gray-500">
          Parking Solution App
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          I created a car parking solution that helps users find nearby parking
          spots and provides real-time traffic updates. Integrated with Google
          Maps, it uses React, Tailwind CSS, Express, Node.js, MongoDB, and
          WebSocket for real-time functionality. Tools like Multer, Vite, and
          Validator were also used to enhance the app.
        </p>
      </div>
    </div>
  );
};

export default Parkingsol;
