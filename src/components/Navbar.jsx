import React from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(true);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="text-white items-center h-20 flex justify-between border-[#383434] max-w-[1240px] mx-auto px-4 border-b-2">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">
        AppSolo Tech.
      </h1>
      <ul className="hidden md:flex">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Resources</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {!nav ? <AiOutlineClose size={25}/> : <AiOutlineMenu size={25} />}
      </div>
      <div className={!nav ? "fixed left-0 top-0 w-[60%] border-r border-r-gray-600 h-full bg-gray-800 ease-in-out duration-500" : 'fixed top-0 w-[60%] left-[-100%] h-full ease-in-out duration-500'}>
        <h1 className="w-full text-3xl font-bold text-[#00df9a] text-center mt-4">
          AppSolo Tech.
        </h1>
        <ul className="uppercase p-4">
          <li className="p-4 border-b border-gray-600">Home</li>
          <li className="p-4 border-b border-gray-600">Company</li>
          <li className="p-4 border-b border-gray-600">Resources</li>
          <li className="p-4 border-b border-gray-600">About</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
