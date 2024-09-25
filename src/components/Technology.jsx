import React from "react";
import Title from "./Title";
import { assets } from "../assets/assets";

const Technology = () => {
  return (
    <div className="flex flex-col mt-20">
      <div className="text-center text-5xl text-white">
        {/*--------the heading ---------- */}
        <Title text1={"Technology "} text2={"Used"} />
      </div>
      {/*-----------the grid----------*/}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
        {/*--------------------upper grid---------- */}
        <div className="flex flex-col items-center rounded-lg p-6 shadow-lg h-auto border-blue-100 hover:shadow-xl transition-shadow duration-300 ease-in-out">
          <img
            src={assets.React_img}
            alt="React"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <p className="text-white text-2xl font-semibold mb-2 text-center">
            React
          </p>
          <p className="text-gray-300 text-center">React framework</p>
        </div>
        {/*-----grid 2----- */}
        <div className="flex flex-col items-center rounded-lg shadow-lg p-6 h-auto border-blue-100 hover:shadow-xl transition-shadow duration-300 ease-in-out">
          <img
            src={assets.Express_img}
            alt="Express.js"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <p className="text-white text-2xl font-semibold mb-2 text-center">
            Express.js
          </p>
          <p className="text-gray-300 text-center">Backend Express.js</p>
        </div>
        {/*-------grid 3----------*/}
        <div className="flex flex-col items-center rounded-lg shadow-lg p-6 h-auto border-blue-100 hover:shadow-xl transition-shadow duration-300 ease-in-out">
          <img
            src={assets.Node_img}
            alt="Node.js"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <p className="text-white text-2xl font-semibold mb-2 text-center">
            Node.js
          </p>
          <p className="text-gray-300 text-center">Backend Node.js</p>
        </div>
        {/*--grid lower--- */}
        <div className="flex flex-col items-center rounded-lg shadow-lg p-6 h-auto border-blue-100 hover:shadow-xl transition-shadow duration-300 ease-in-out">
          <img
            src={assets.mongodb_img}
            alt="MongoDB"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <p className="text-white text-2xl font-semibold mb-2 text-center">
            MongoDB
          </p>
          <p className="text-gray-300 text-center">Database: MongoDB</p>
        </div>

        <div className="flex flex-col items-center rounded-lg shadow-lg p-6 h-auto border-blue-100 hover:shadow-xl transition-shadow duration-300 ease-in-out">
          <img
            src={assets.git_img}
            alt="Git"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <p className="text-white text-2xl font-semibold mb-2 text-center">
            Git
          </p>
          <p className="text-gray-300 text-center">Technology: Git</p>
        </div>

        <div className="flex flex-col items-center rounded-lg shadow-lg p-6 h-auto border-blue-100 hover:shadow-xl transition-shadow duration-300 ease-in-out">
          <img
            src={assets.bootstrap_img}
            alt="Bootstrap"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <p className="text-white text-2xl font-semibold mb-2 text-center">
            Bootstrap
          </p>
          <p className="text-gray-300 text-center">Bootstrap and MUI</p>
        </div>
      </div>
    </div>
  );
};

export default Technology;
