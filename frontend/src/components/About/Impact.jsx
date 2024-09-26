import React from "react";
import img from "../../assets/about/image4.webp";
function Impact() {
  const impactData = [
    {
      title: "Project Completed",
      img: img,
      count: "300 +",
    },
    {
      title: "Workshops Conducted",
      img: img,
      count: "300 +",
    },
    {
      title: "Students Engaged",
      img: img,
      count: "300 +",
    },
    {
      title: "Hackathons Organized",
      img: img,
      count: "300 +",
    },
  ];
  return (
    <div>
      <div className="w-screen flex flex-col justify-center items-center px-6 lg:px-24 py-8 bg-white mt-2 pb-[200px]">
        <h2 className="w-full text-secondary font-bold text-2xl mb-6">
          Our Impact
        </h2>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-4 grid-cols-2 w-full items-center justify-center">
          {impactData?.map(({ img, title, count }, index) => (
            <div
              key={index}
              className="border-[2px] border-tersiary h-[250px] flex flex-col justify-center items-center gap-4 lg:w-[250px] rounded-md"
            >
              <img src={img} alt="" className="w-[50px] rounded-lg" />
              <p className="font-extrabold text-secondary mt-4 w-full text-center">
                {" "}
                {count}
              </p>
              <h5 className="font-semibold w-full text-center">{title}</h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Impact;
