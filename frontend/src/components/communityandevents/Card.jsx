import React from 'react'
import { BsCalendarDate } from "react-icons/bs";

function Card({
  image,
  title,
  date,
  event_link,
  event_type,
  tags,
  short_description,
}) {
  console.log(tags, event_link);
  return (
    <div className="rounded-lg flex-1 max-w-[350px] w-fit border-[2px] border-gray-300">
      <img className="w-full rounded-t-lg object-cover" src={image} alt="" />
      <div className="flex flex-col w-full p-4 ">
        <h2 className="text-tersiary text-lg font-semibold">{title}</h2>
        <p>{short_description.slice(0, 80) + "..."}</p>
        <div className="w-full my-2 gap-3 text-gray-600 text-sm flex flex-row justify-start">
          <BsCalendarDate color="#0FA958" className='animate-float' />
          <p>{date}</p>
        </div>
        <div className="overflow-clip inline-flex gap-3 text-sm  my-3 justify-start w-full">
          <p className="bg-tersiary font-semibold text-white p-1 rounded-md">
            {event_type}
          </p>
          {tags.map((tag, index) => (
            <p key={index} className="bg-slate-200  p-1 rounded-md">
              {tag}
            </p>
          ))}
        </div>

        <button
          onClick={() => window.open(`${event_link}`, "_blank")}
          className="text-bold hover:cursor-pointer text-white bg-secondary w-full text-center  py-3 font-semibold rounded-xl"
        >
          Checkout Event
        </button>
      </div>
    </div>
  );
}

export default Card