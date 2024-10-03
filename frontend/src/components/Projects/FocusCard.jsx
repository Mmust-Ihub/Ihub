import React from "react";
import { Link } from "react-router-dom";

function FocusCard({ icon: Icon, title, link, delay }) {
    console.log(delay)
  return (
    <Link
      to={link}
      className={` flex  hover:bg-[#82e9f7] hover:scale-105 transition-all hover:cursor-pointer flex-col bg-slate-200 p-4 md:p-6 lg:p-7 gap-2 rounded-md items-center mt-5`}
    >
      <Icon className="text-5xl text-gray-500" />
      <h1 className="lg:text-2xl text-xl font-bold text-gray-800 ml-3">
        {title}
      </h1>
    </Link>
  );
}

export default FocusCard;
