import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10 mt-20 text-white">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-3">Sponsor Me</h1>
        <h2 className="text-xl">Buy Me a Coffee</h2>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center w-full md:w-2/3 lg:w-1/2 mb-10 space-y-8 md:space-y-0 md:space-x-8">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-semibold">Phone Number</h1>
          <p className="text-lg mt-2">+91 9311858803</p>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-semibold">Email</h1>
          <p className="text-lg mt-2">deepsimran956@gmail.com</p>
        </div>
      </div>

      <h1 className="text-lg text-center mb-6">
        Check Out My Social Media Profiles
      </h1>

      <div className="flex space-x-6 mb-10">
        <button className="border rounded-full border-white w-12 h-12 flex items-center justify-center hover:bg-white hover:text-black transition duration-300">
          <img src={assets.instagram_img} alt="Instagram" />
        </button>
        <button className="border rounded-full border-white w-12 h-12 flex items-center justify-center hover:bg-white hover:text-black transition duration-300">
          <img src={assets.linkdin_img} alt="LinkedIn" />
        </button>
        <button className="border rounded-full border-white w-12 h-12 flex items-center justify-center hover:bg-white hover:text-black transition duration-300">
          <img src={assets.hub_img} alt="GitHub" />
        </button>
        <button className="border rounded-full border-white w-12 h-12 flex items-center justify-center hover:bg-white hover:text-black transition duration-300">
          <img src={assets.x_img} alt="X (formerly Twitter)" />
        </button>
        <button className="border rounded-full border-white w-12 h-12 flex items-center justify-center hover:bg-white hover:text-black transition duration-300">
          <img src={assets.discrod_img} alt="Discord" />
        </button>
      </div>

      <hr className="border-gray-400 w-full mb-8" />

      <h1 className="text-center text-sm mb-4">
        © 2024 by Simran Deep Singh. All Rights Reserved.
      </h1>
    </div>
  );
};

export default Footer;
