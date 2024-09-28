import React from 'react'
import { TfiTimer } from "react-icons/tfi";
import { FaLocationDot } from "react-icons/fa6";
import { useNavigation } from 'react-router-dom';

function Card({ image, title, date,event_link, location }) {
  const navigate = useNavigation()
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
        <a
          href={event_link}
          className="text-bold text-white bg-tersiary px-3 py-1 rounded-xl"
        >
          Register
        </a>
      </div>
    </div>
  );
}

export default Card