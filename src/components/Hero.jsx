import React from "react";

const Hero = () => {
  return (
    <div className="h-screen">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold text-xl p-2">Grow With Data Analytics</p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Grow With Data
        </h1>
        <p className="md:text-2xl text-xl font-bold pt-2 text-gray-500">
          Take control of your digital assets. Monitor your data and identify opurtunites for growth.
        </p>
        <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
