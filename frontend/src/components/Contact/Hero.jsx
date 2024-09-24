import React from "react";
import { HashLink } from "react-router-hash-link";
import { FaArrowDown } from "react-icons/fa";
function Hero() {
  return (
    <div className="w-screen h-[50vh] lg:h-[60vh]  px-6 lg:px-12 py-8 text-white contactbg flex flex-col justify-center items-center pt-[100px] lg:pt-0 mt-[80px]">
      <div className="w-full flex items-center justify-center  flex-col">
        <h2 className="text-5xl lg:text-6xl text-white font-bold mb-12">
          Contact Us
        </h2>
        <div
          className="w-16 h-16 flex items-center justify-center  shadow-lg rounded-full shadow-white px-2 py-2 bg-body mx-12 animate-bounce z-[99]"
          rel="ugc"
        >
          <HashLink to="#main" smooth>
            <FaArrowDown className="w-8 h-8 font-extrabold" />
          </HashLink>
        </div>
      </div>
    </div>
  );
}

export default Hero;
