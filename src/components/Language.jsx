import React from "react";
import Title from "./Title";
import { assets } from "../assets/assets";

const Language = () => {
  return (
    <div className="flex flex-col mt-10">
      <div className="text-center text-5xl">
        <Title text1={"Language "} text2={" Used"} />
      </div>

      {/* Image container */}
      <div className="flex flex-wrap justify-center gap-8 mt-8">
        <img
          src={assets.java_img}
          alt="Java"
          className="w-28 h-28 md:w-36 md:h-36 rounded-full object-cover shadow-lg hover:scale-105 transition-transform"
        />
        <img
          src={assets.C_img}
          alt="C"
          className="w-28 h-28 md:w-36 md:h-36 rounded-full object-cover shadow-lg hover:scale-105 transition-transform"
        />
        <img
          src={assets.python_img}
          alt="Python"
          className="w-28 h-28 md:w-36 md:h-36 rounded-full object-cover shadow-lg hover:scale-105 transition-transform"
        />
        <img
          src={assets.CC_img}
          alt="C++"
          className="w-28 h-28 md:w-36 md:h-36 rounded-full object-cover shadow-lg hover:scale-105 transition-transform"
        />
        <img
          src={assets.mysql_img}
          alt="MySQL"
          className="w-28 h-28 md:w-36 md:h-36 rounded-full object-cover shadow-lg hover:scale-105 transition-transform"
        />
      </div>
    </div>
  );
};

export default Language;
