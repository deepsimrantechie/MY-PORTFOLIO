import React from "react";
import Title from "./Title";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div className="flex flex-col items-center mt-10 px-4">
      {/* Title Section */}
      <div className="text-4xl sm:text-5xl mb-12 text-white text-center">
        <Title text1={"Extra "} text2={"Skills"} />
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Figma Skill */}
        <div className="flex flex-col items-center text-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out bg-gradient-to-r">
          <img
            src={assets.figma_img}
            alt="Figma"
            className="w-20 h-20 object-contain mb-4 rounded-lg"
          />
          <h1 className="text-2xl sm:text-3xl font-semibold mb-2">Figma</h1>
          <p className="text-base sm:text-lg text-center text-gray-300">
            UI/UX design tool for prototypes
          </p>
        </div>

        {/* Canva Skill */}
        <div className="flex flex-col items-center text-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out bg-gradient-to-r">
          <img
            src={assets.Canva_img}
            alt="Canva"
            className="w-20 h-20 object-contain mb-4 rounded-lg"
          />
          <h1 className="text-2xl sm:text-3xl font-semibold mb-2">Canva</h1>
          <p className="text-base sm:text-lg text-center text-gray-300">
            Graphic design platform
          </p>
        </div>

        {/* Flutter Skill */}
        <div className="flex flex-col items-center text-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out bg-gradient-to-r">
          <img
            src={assets.flutter_img}
            alt="Flutter"
            className="w-20 h-20 object-contain mb-4 rounded-lg"
          />
          <h1 className="text-2xl sm:text-3xl font-semibold mb-2">Flutter</h1>
          <p className="text-base sm:text-lg text-center text-gray-300">
            Cross-platform mobile development
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
