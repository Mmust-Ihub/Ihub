import React from "react";
import aboutimg1 from "../../assets/about/mission.webp";
import aboutimg2 from "../../assets/about/vision.webp";
function MissionVision() {
  return (
    <div className="w-full px-6 lg:px-12 lg:py-6 text-black mt-0 flex flex-col items-center justify-center">
      <div className="w-full flex lg:flex-row-reverse flex-col-reverse items-start justify-around lg:justify-start">
        <div className="w-full lg:w-[50%]  flex items-center justify-center lg:items-start lg:justify-start">
          <img
            src={aboutimg1}
            alt="mission image"
            className="lg:w-[full] lg:h-[200px] object-contain"
          />
        </div>
        <div className="w-full lg:w-[45%]">
          {" "}
          <h2 className="text-secondary font-bold text-2xl mt-6 mb-2">
            Mission
          </h2>
          <p className="w-full lg:w-[85%] text-md font-[500]">
            To create a vibrant and inclusive community of innovators, startups,
            and entrepreneurs, providing them with the resources, support, and
            opportunities they need to succeed
          </p>
        </div>
      </div>
      <div className="w-full flex lg:flex-row flex-col-reverse items-start justify-between">
        <div className="w-full lg:w-[50%] flex items-center justify-center lg:items-start lg:justify-start lg:ml-[35px]">
          <img
            src={aboutimg2}
            alt="vision image"
            className="lg:w-[full] lg:h-[200px] object-contain "
          />
        </div>
        <div className="w-full lg:w-[45%] lg:self-end">
          {" "}
          <h2 className="text-secondary font-bold text-2xl mt-6 mb-2">
            Vision
          </h2>
          <p className="w-full lg:w-[85%] text-md font-[500]">
            To foster innovation, entrepreneurship, and collaboration to drive
            economic growth and social impact
          </p>
        </div>
      </div>
    </div>
  );
}

export default MissionVision;
