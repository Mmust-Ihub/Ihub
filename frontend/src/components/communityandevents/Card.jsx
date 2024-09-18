import React from 'react'
import { TfiTimer } from "react-icons/tfi";
import { FaLocationDot } from "react-icons/fa6";

function Card({ image, title, date, location }) {
  return (
    <div className="rounded-lg flex-1 max-w-[350px] w-fit border-[2px] border-gray-300">
      <img className="w-full rounded-t-lg object-cover" src={image} alt="" />
      <div className="w-full p-4">
        <h2 className="text-tersiary">{title}</h2>
        <div className="w-full gap-3 text-gray-600 text-sm flex flex-row justify-start">
          <TfiTimer color="#0FA958" />
          <p>{date}</p>
        </div>
        <div className="flex flex-row gap-3 justify-start w-full">
          <FaLocationDot color="#0FA958" />
          <p>{location}</p>
        </div>
        <button className="text-bold text-white bg-tersiary px-3 py-1 rounded-xl">
          Register
        </button>
      </div>
    </div>
  );
}

export default Card