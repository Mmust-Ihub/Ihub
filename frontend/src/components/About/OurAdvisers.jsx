import React, { useState } from "react";
import img1 from "../../assets/simiyu.jpg";
import img2 from "../../assets/rambim.jpg";
import img3 from "../../assets/download.jpeg";

import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
function OurTeam() {
  const [selectedMember, setSelectedMember] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const advisersData = [
    {
      name: "Mr. Prestone Simiyu",
      img: img1,
      role: "",

      linkedin:
        "https://www.linkedin.com/in/prestonesimiyu/?originalSubdomain=ke",
      twitter: "",
    },
    {
      name: "Dr. Dorothy Rambim",
      img: img2,
      role: "",

      linkedin: "https://ke.linkedin.com/in/dorothy-rambim-3b716749",
      twitter: "",
    },
    {
      name: "Elvis Amiani",
      img: img3,
      role: "",
      github: "https://github.com/Amianie/",
      linkedin: "",
      twitter: "",
    },
  ];

  const openModal = (member) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedMember(null);
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="w-screen flex flex-col justify-center items-center px-6 lg:px-24 py-8 bg-[#E0F7FA] relative">
        <h2 className="w-full text-secondary font-bold text-3xl mt-6 mb-8">
          Our Advicers
        </h2>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-4 grid-cols-1 w-full items-center justify-center pb-6">
          {advisersData?.map((member, index) => (
            <div
              key={index}
              className="shadow-md shadow- hover:shadow-lg flex flex-col items-center justify-center lg:w-[250px] rounded-xl space-y-4 py-4 px-4 transition-all duration-500 ease-in-out bg-white hover:scale-105"
            >
              <img
                src={member.img}
                alt=""
                className="hover:scale-105 hover:shadow-xl h-[150px] object-cover object-top w-[150px] rounded-full shadow-xl shadow-secondary"
              />
              <div>
                <h5 className="mt-6 font-bold text-lg">{member.name}</h5>
                <p className="font-semibold text-gray-500">{member.role}</p>
              </div>
              <div className="flex flex-row items-center text-center gap-6 text-secondary">
                <a
                  href={member.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaXTwitter className="hover:scale-125 hover:text-tersiary h-[20px] w-[20px] transition-all duration-300 ease-in-out" />
                </a>
                {member?.github && (
                  <a
                    href={member?.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="hover:scale-125 hover:text-tersiary h-[20px] w-[20px] transition-all duration-300 ease-in-out" />
                  </a>
                )}
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="hover:scale-125 hover:text-tersiary h-[20px] w-[20px] transition-all duration-300 ease-in-out" />
                </a>
              </div>
              <button
                className="bg-secondary px-4 h-[35px] rounded-[60px] text-white font-[500] flex items-center gap-2 lg:px-6 mt-6 w-[180px] text-center justify-center hover:scale-105 transition-all duration-200 ease-in-out"
                onClick={() => openModal(member)}
              >
                Bio
              </button>
            </div>
          ))}
        </div>

        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-85 flex items-center justify-center z-[999]">
            <div className="bg-white rounded-lg p-6 max-w-sm w-full relative">
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
              >
                <FaTimes className="h-6 w-6" />
              </button>
              {selectedMember && (
                <>
                  <img
                    src={selectedMember.img}
                    alt={selectedMember.name}
                    className="h-[150px] w-[150px] rounded-full mb-4 object-cover object-top shadow-xl shadow-secondary"
                  />
                  <h5 className="text-lg font-bold">{selectedMember.name}</h5>
                  <p className="font-semibold text-gray-500">
                    {selectedMember.role}
                  </p>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default OurTeam;
