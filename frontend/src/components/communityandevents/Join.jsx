import React from "react";

function Join({ image, title, description, reverse, BtnText }) {
  return (
    <div
      className={`my-6 lg:my-12 flex flex-col lg:flex-row justify-between items-center  ${
        reverse ? "lg:flex-row-reverse" : ""
      }`}
    >
      <img src={image} alt="community pics" className="max-w-[250px]" />
      <div className="space-y-5 max-w-[450px]">
        <div className="space-y-2">
          <h2 className="text-secondary font-bold text-2xl mt-6 mb-2">
            {title}
          </h2>
          <p>{description}</p>
        </div>
        <button className="bg-secondary text-white py-2 px-2 rounded-xl">
          {BtnText}
        </button>
      </div>
    </div>
  );
}

export default Join;
