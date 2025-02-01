import React, { useState } from "react";
import img1 from "../../assets/simiyu.jpg";
import img2 from "../../assets/rambim.jpg";
import img3 from "../../assets/download.jpeg";
import im4 from "../../assets/about/drsum.jpeg";

import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

function OurTeam() {
  const [selectedMember, setSelectedMember] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const advisersData = [
    {
      name: "Dr. Tecla Sum Psusma",
      img: im4,
      role: "",
      biosource:
        "https://mmust.ac.ke/staffprofiles/index.php/dr-tecla-sum-psusma",
      bio: "Dr. Tecla Sum is the Director,Science Park Innovation and Incubation Centre (SPIIC) and former Chairperson of the Paramedical Sciences Department, with over 9 years in teaching and clinical experience. She is currently pursuing Post-doctoral studies in Emergency Medicine & Trauma Systems Management at Rutgers University, USA.  She holds a PhD Med. Edu, Moi University with a Master of Science Degree in Emergency Train System from Lingoping University, Sweden and a Master of Science degree in Nursing (Maternal and Neonatal Health), Moi University.  Dr Sum is also a holder of Bachelor of Science in Nursing from University of Eastern Africa Baraton.Dr.Sum is Kenya’s representative in United Nations Economic Commission for Africa(UNECA) and a member of Patent Draft Chapter, Emergency and Trauma Medicine Education and Training Association following her breakthrough discovery and outstanding innovation of a cloud based contact tracing application tool(eKonnect).She spearheaded the establishment of Bachelor of Science in Paramedical Science qualifying MMUST to be the maiden university to offer this program in Africa.Dr. Sum is MMUST's Covid response deputy chairperson and also serves as the County Technical Emergency response expert in Kakamega County.  Given her vast knowledge and experience in research and innovation, she has attracted several research grants ,having served as a board Member, Directorate of Science Park Innovation and Incubation Centre (SPIIC).Her Goal is to Preserve life, Promote Recovery and Preventing complications and Disabilities. ",
      linkedin:
        "https://www.linkedin.com/search/results/all/?keywords=dr%20sum%20tecla%20&origin=GLOBAL_SEARCH_HEADER&sid=%3A8L",
      twitter: "",
    },
    {
      name: "Dr. Dorothy Rambim",
      img: img2,
      role: "",
      biosource:
        "https://www.mmust.ac.ke/staffprofiles/index.php/dorothy-rambim",
      bio: "Dr. Dorothy Apondi Rambim is currently a lecturer in the Department of Computer Science, School of Computing and Information of Masinde Muliro University. She is a researcher and ICT for Development Consultant, with focus on wireless communication, Internet of Things(IoT), AI-Machine learning, Blockchain and ICT for development (ICT4D); E-Agriculture, HealthIT, GBV and Digital Education. She in a mentor and innovator on design and development of ICT/mobile-based innovations and a trainer on system data quality assessment. She holds a doctorate degree in Information System, Master of Technology in Electrical Engineering- Telecommunication earned at Tshwane University of Science and Technology-South Africa and a BSc degree (Hons) in Computer Science from Moi University –Kenya. She currently serves as Chairperson, Department of Computer Science, at MMUST.",
      linkedin: "https://ke.linkedin.com/in/dorothy-rambim-3b716749",
      twitter: "",
    },
    {
      name: "Mr. Prestone Simiyu",
      img: img1,
      role: "",
      biosource:
        "https://www.mmust.ac.ke/staffprofiles/index.php/view-all/368-mr-prestone-simiyu",
      bio: "Mr.Prestone Simiyu is a Tutorial Fellow in IT Department at Masinde Muliro University of Science and Technology.He holds Bachelor of Science in Telecommunication and Information Technology from Kenyatta University and a Master of Science in Information Technology  from Kibabii University. Mr.Prestone has vast experience in the technological field and academics,having served as an Instructor,Senior Technician,Developer,Project Manager and Administrative Assistant in different organizations and institutions.He is skilled in Designing Blended Courses, Android Development using Kotlin(Google), Wordpress webiste development, Moodle (LMS) specialist, ISO 27001:2013, Web Metrics, pedagogical skills, board paper and cabinet memo writing, ISO 9001: 2015 and Native Android development from Emobilis. Additionally, he has developed various software including, high school management system and different android application  as well creating and hosting a number of website",
      linkedin:
        "https://www.linkedin.com/in/prestonesimiyu/?originalSubdomain=ke",
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

  const truncateBio = (bio) => {
    const maxLength = 350;
    if (bio.length > maxLength) {
      return `${bio.slice(0, maxLength)}... `;
    }
    return bio;
  };

  return (
    <>
      <div className="w-screen flex flex-col justify-center items-center px-6 lg:px-24 py-8 bg-[#E0F7FA] relative">
        <h2 className="w-full text-secondary font-bold text-3xl mt-6 mb-8">
          Our Advisors
        </h2>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-4 grid-cols-1 w-full items-center justify-center pb-6">
          {advisersData?.map((member, index) => (
            <div
              key={index}
              className="shadow-md hover:shadow-lg flex flex-col items-center justify-center lg:w-[250px] rounded-xl space-y-4 py-4 px-4 transition-all duration-500 ease-in-out bg-white hover:scale-105"
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
                  <FaXTwitter className="hover:scale-125 hover:text-tertiary h-[20px] w-[20px] transition-all duration-300 ease-in-out" />
                </a>
                {member?.github && (
                  <a
                    href={member?.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="hover:scale-125 hover:text-tertiary h-[20px] w-[20px] transition-all duration-300 ease-in-out" />
                  </a>
                )}
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="hover:scale-125 hover:text-tertiary h-[20px] w-[20px] transition-all duration-300 ease-in-out" />
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
          <div className="w-screen fixed inset-0 bg-black bg-opacity-85 flex items-center justify-center z-[99] overflow-y-auto">
            <div className="bg-white rounded-lg p-6 max-w-lg w-full relative max-h-[90vh] mt-[220px]">
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
              >
                <FaTimes className="h-8 w-8" />
              </button>
              {selectedMember && (
                <div className="w-full justify-center items-center flex-col">
                  <div className="flex flex-col w-full justify-center items-center mb-4">
                    <img
                      src={selectedMember?.img}
                      alt={selectedMember?.name}
                      className="animate-float h-[100px] w-[100px] md:h-[200px] md:w-[200px] rounded-full mb-4 object-cover object-top shadow-lg shadow-secondary mt-[-25%]"
                    />
                    <h5 className="text-2xl font-bold">
                      {selectedMember?.name}
                    </h5>
                    <p className="font-semibold text-black text-lg">
                      {selectedMember?.role}
                    </p>
                  </div>
                  <p className="w-full text-black font-[500] text-base md:text-lg px-4">
                    {truncateBio(selectedMember?.bio)}
                    {selectedMember?.bio.length > 350 && (
                      <a
                        href={selectedMember?.biosource}
                        className="text-blue-500 cursor-pointer"
                        target="_blank"
                      >
                        read more
                      </a>
                    )}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default OurTeam;
