import React from "react";
import Title from "./Title";
import { assets } from "../assets/assets";

const Intrest = () => {
  return (
    <div className="flex flex-col mt-16 px-4 lg:px-20">
      {/* Title */}
      <div className="text-center text-5xl lg:text-6xl font-bold mb-12">
        <Title text1={"MY "} text2={"PROJECTS"} />
      </div>

      {/* Container for left and right sections */}
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between space-y-10 lg:space-y-0">
        {/* Left side - Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <img
            src={assets.haveit_img}
            alt="Food Delivery App"
            className="w-4/5 h-auto rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out"
          />
        </div>

        {/* Right side - Text */}
        <div className="w-full lg:w-1/2 flex flex-col space-y-6 lg:pl-10">
          <h1 className="text-4xl font-semibold text-gray-500 text-center lg:text-left">
            Food Delivery App
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed text-center lg:text-left">
            I developed a fully functional food delivery app with both an admin
            dashboard and a complete frontend using the MERN stack. The project
            utilized advanced technologies like Git, GitHub, Figma for UI/UX
            design, CORS, Multer, JWT, Stripe, Razorpay, and Validator to
            enhance the app’s functionality. These tools were essential in
            completing the project. I also drew inspiration from resources on
            Google and YouTube for the design to improve the user experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intrest;
