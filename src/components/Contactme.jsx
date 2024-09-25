import React from "react";
import { assets } from "../assets/assets";

const Contactme = () => {
  return (
    <div className="flex flex-col md:flex-row text-white mt-20 px-4 md:px-0">
      {/* Left side */}
      <div className="flex flex-col text-left md:w-1/2 space-y-6 mt-20">
        <h1 className="text-5xl font-bold leading-tight">
          Let's Work Together
        </h1>
        <p className="text-lg md:text-2xl text-gray-300">
          Feel free to express yourself however you want, whenever you want.
          <br /> I'm here to listen and help with any thoughts or ideas you wish
          to share.
        </p>
        <button className="bg-white text-black text-lg font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:bg-gray-200 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-gray-500">
          Say Hello
        </button>
      </div>

      {/* Right side */}
      <div className="flex justify-center items-center md:w-1/2 mt-10 md:mt-0">
        <img
          src={assets.contact_img}
          alt="Contact Me"
          className="rounded-lg shadow-lg w-full h-auto max-w-lg"
        />
      </div>
    </div>
  );
};

export default Contactme;
