import React from "react";
import LaptopImg from "../assets/laptop.jpg";

function Analytics() {
  return (
    <div className="w-full bg-white px-4 text-black">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={LaptopImg} alt="laptop" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold uppercase">
            Data Analytics Dashboard
          </p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage Data Analytics Centrally
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero unde
            provident iste corrupti architecto, incidunt dolore pariatur
            similique nam perspiciatis tempore consequuntur iure fuga ut modi
            excepturi sunt dicta.
          </p>
          <button className="bg-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-[#00df9a]">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
