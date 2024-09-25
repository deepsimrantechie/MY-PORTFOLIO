import React from "react";
import Title from "./Title";
import { assets } from "../assets/assets";

const Language = () => {
  return (
    <div className="flex flex-col mt-10">
      {/* Title Section */}
      <div className="text-center text-3xl sm:text-4xl md:text-5xl">
        <Title text1={"Language "} text2={" Used"} />
      </div>

      {/* Image container */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 mt-8">
        <img
          src={assets.java_img}
          alt="Java"
          className="w-20 h-20 sm:w-24 sm:h-24 md:w-36 md:h-36 rounded-full object-cover shadow-lg hover:scale-105 transition-transform"
        />
        <img
          src={assets.C_img}
          alt="C"
          className="w-20 h-20 sm:w-24 sm:h-24 md:w-36 md:h-36 rounded-full object-cover shadow-lg hover:scale-105 transition-transform"
        />
        <img
          src={assets.python_img}
          alt="Python"
          className="w-20 h-20 sm:w-24 sm:h-24 md:w-36 md:h-36 rounded-full object-cover shadow-lg hover:scale-105 transition-transform"
        />
        <img
          src={assets.CC_img}
          alt="C++"
          className="w-20 h-20 sm:w-24 sm:h-24 md:w-36 md:h-36 rounded-full object-cover shadow-lg hover:scale-105 transition-transform"
        />
        <img
          src={assets.mysql_img}
          alt="MySQL"
          className="w-20 h-20 sm:w-24 sm:h-24 md:w-36 md:h-36 rounded-full object-cover shadow-lg hover:scale-105 transition-transform"
        />
      </div>
    </div>
  );
};

export default Language;
