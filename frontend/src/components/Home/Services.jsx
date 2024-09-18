import React from "react";
import serviceimg from "../../assets/webp/services.webp";
import { Link } from "react-router-dom";
function Services() {
  return (
    <div className="w-screen px-6 lg:px-12 py-8 text-black">
      <div className="w-full flex lg:flex-row-reverse flex-col items-start justify-center  ">
        <div className="w-full lg:w-[50%] lg:mt-16">
          <img
            src={serviceimg}
            alt="pointer hand image"
            className="lg:w-[450px] lg:h-[300px] object-contain "
          />
        </div>
        <div className="w-full lg:w-[50%] lg:ml-[60px]">
          {" "}
          <h2 className="text-secondary font-bold text-2xl mt-8 mb-4">
            What We Do
          </h2>
          <p className="w-full lg:w-[85%] text-lg">
            We offer a diverse range of services designed to support and
            accelerate innovation. Our core focus areas include:
          </p>
          <br />
          <ul className="w-full lg:w-[85%] grid lg:grid-cols-2  grid-cols-1 gap-2 text-md">
            <li className="list truncate">Software Development</li>
            <li className="list truncate">Website Development</li>
            <li className="list truncate">Mentorship Programs</li>
            <li className="list truncate">Innovation Labs</li>
            <li className="list truncate">Prototype Development</li>
            <li className="list truncate">Consulting Services</li>
            <li className="list truncate">Workshops and Training</li>
            <li className="list truncate">Networking Opportunities</li>
          </ul>
        </div>
      </div>
      <div>
        <Link
          to={"/programs"}
          className="bg-secondary px-4 h-[35px]  rounded-[60px] text-white font-[500] hover:opacity-75 shadow-xl flex items-center gap-2 lg:px-6 mt-6 w-[180px] text-center justify-center lg:ml-[57px] hover:scale-105  transition-all duration-200 ease-in-out "
        >
          Explore
        </Link>
      </div>
    </div>
  );
}

export default Services;
