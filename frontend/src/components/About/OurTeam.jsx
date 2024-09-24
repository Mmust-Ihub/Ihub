import React, { useState } from "react";
import img1 from "../../assets/OurTeam/maich.webp";
import img2 from "../../assets/OurTeam/mwas.jpeg";
import img3 from "../../assets/OurTeam/antony.jpeg";
import img4 from "../../assets/OurTeam/joe.jpeg";
import img5 from "../../assets/OurTeam/jossy.jpeg";
import img6 from "../../assets/OurTeam/sebbie1.jpeg";
import img7 from "../../assets/OurTeam/neema.jpg";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
function OurTeam() {
  const [selectedMember, setSelectedMember] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const advisersData = [{}];
  const teamData = [
    {
      name: "Antony Kariuki",
      img: img3,
      role: "Team Lead",
      github: "https://github.com/KariukiAntony",
      linkedin: "https://www.linkedin.com/in/antonygichoya/",
      twitter: "https://x.com/gichoya_antony",
    },
    {
      name: "Michael Maina",
      img: img1,
      role: "Project Developer Lead",
      github: "https://github.com/Muchael123/",
      linkedin: "https://www.linkedin.com/in/michael-maina-087227235",
      twitter: "https://x.com/Maich_mgaza",
    },
    {
      name: "David Mwangi",
      img: img2,
      role: "Technical Lead",
      github: "https://github.com/David-mwas",
      linkedin: "https://ke.linkedin.com/in/david-mwas-a57186235",
      twitter: "https://x.com/DavidMwas2_0",
    },

    {
      name: "Michael Joseph",
      img: img4,
      role: "Events Organiser",
      github: "https://github.com/Mikiejoe",
      linkedin: "https://www.linkedin.com/in/joseph-michael-445111235/",
      twitter: "https://x.com/omoshjoe02",
    },
    {
      name: "Josphine Gatwiri",
      img: img5,
      role: "Treasurer",
      github: "https://github.com/JosphineG",
      linkedin: "https://www.linkedin.com/in/josphinegatwiri27/",
      twitter: "https://x.com/angeljosphine34",
    },
    {
      name: "Sebastian Chanzu",
      img: img6,
      role: "Digital Marketing",
      github: "https://github.com/SebbieMzingKe",
      linkedin: "https://www.linkedin.com/in/sebbie-evayo-3249a9250/",
      twitter: "https://x.com/sebbiemzing",
    },
    {
      name: "Valencia Neema",
      img: img7,
      role: "Mentor",
      github: "https://github.com/lencemmust",
      linkedin: "https://www.linkedin.com/in/valencia-neema-162130287/",
      twitter: "https://x.com/neemavalencia",
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
          Our Team
        </h2>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-4 grid-cols-1 w-full items-center justify-center pb-6">
          {teamData.map((member, index) => (
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
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="hover:scale-125 hover:text-tersiary h-[20px] w-[20px] transition-all duration-300 ease-in-out" />
                </a>
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
