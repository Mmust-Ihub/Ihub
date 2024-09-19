import React from "react";
import map from "../../assets/contact/image.webp";
function LiveLocationMap() {
  return (
    <div className="w-screen flex flex-col justify-center items-center px-6 lg:px-24 py-8 pb-[180px]">
      <h2 className="w-full text-secondary font-bold text-3xl mt-6 mb-8">
        Live Location
      </h2>
      <div className="w-full">
        <img
          src={map}
          alt="live location image map"
          className="w-full rounded-xl shadow-sm shadow-black"
        />
      </div>
    </div>
  );
}

export default LiveLocationMap;
