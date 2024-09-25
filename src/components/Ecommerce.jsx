import React from "react";
import { assets } from "../assets/assets";

const Ecommerce = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center mt-20 px-4 lg:px-20 space-y-10 lg:space-y-0">
      {/* Left side - Text Section */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center lg:pl-10 space-y-6">
        <h1 className="text-4xl lg:text-4xl font-semibold text-gray-500">
          E-commerce Website
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          I developed an e-commerce website that provides a seamless online
          shopping experience. It features an admin panel from which multiple
          products can be added to the main site. For this project, I utilized
          HTML, Tailwind CSS, React, Node.js, Express, MongoDB, Razorpay,
          Stripe, CORS, Multer, Validator, JWT, Bcrypt, and Body-Parser.
        </p>
      </div>

      {/* Right side - Image Section */}
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
        <img
          src={assets.shopee_img}
          alt="E-commerce Website"
          className="w-4/5 h-auto rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out"
        />
      </div>
    </div>
  );
};

export default Ecommerce;
