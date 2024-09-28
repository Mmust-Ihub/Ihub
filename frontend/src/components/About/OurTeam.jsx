import React, { useState } from "react";
import img1 from "../../assets/OurTeam/maich.webp";
import img2 from "../../assets/OurTeam/mwas.jpeg";
import img3 from "../../assets/OurTeam/antony.jpeg";
import img4 from "../../assets/OurTeam/joe.jpeg";
import img5 from "../../assets/OurTeam/jossy.jpeg";
import img6 from "../../assets/OurTeam/sebbie1.jpeg";
import img7 from "../../assets/OurTeam/neema.jpg";
import { FaGithub, FaLink, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
function OurTeam() {
  const [selectedMember, setSelectedMember] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const teamData = [
    {
      name: "Antony Kariuki",
      img: img3,

      role: "Team Lead || Backend & DevOps Engineer",
      portfolio: "",
      github: "https://github.com/KariukiAntony",
      linkedin: "https://www.linkedin.com/in/antonygichoya/",
      twitter: "https://x.com/gichoya_antony",
      biosource: "https://www.linkedin.com/in/antonygichoya/",
      bio: "A software developer and Team Lead at MMUST iHub, specializing as a Backend & DevOps Engineer. Proficient in Golang and Python, I focus on building robust backend solutions and implementing efficient CI/CD pipelines for web and mobile applications. Passionate about delivering high-quality software and fostering innovation within my team.",
    },
    {
      name: "Michael Maina",
      img: img1,
      role: "Project Developer Lead || Frontend Developer",
      portfolio: "https://michael-maina.me/",
      github: "https://github.com/Muchael123/",
      linkedin: "https://www.linkedin.com/in/michael-maina-087227235",
      twitter: "https://x.com/Maich_mgaza",
      biosource: "https://www.linkedin.com/in/michael-maina-087227235",
      bio: "I am a Software Developer and Project Lead at MMUST-iHub, specializing in frontend and mobile development. I utilize React and Next.js for web applications, while leveraging React Native for mobile development. My focus is on creating seamless and engaging user experiences across platforms. I am passionate about building innovative solutions that drive impact and empower communities.",
    },
    {
      name: "David Mwangi",
      img: img2,
      role: "Technical Lead || Frontend Developer",
      portfolio: "https://david-mwas.me/",
      github: "https://github.com/David-mwas",
      linkedin: "https://ke.linkedin.com/in/david-mwas-a57186235",
      twitter: "https://x.com/DavidMwas2_0",
      biosource: "https://ke.linkedin.com/in/david-mwas-a57186235",
      bio: "As a Software Developer and Technical Lead at MMUST iHub, I specialize in Frontend Development with a strong proficiency in React and React Native. My focus is on creating user-friendly interfaces and scalable web applications. I am passionate about delivering seamless user experiences and fostering innovation within my team. With expertise in ReactJS, Next.js, Tailwind CSS, JavaScript, and Node.js, I craft responsive designs that enhance web experiences.",
    },

    {
      name: "Michael Joseph",
      img: img4,
      role: "Events, Bootcamps Organiser || Fullstack Developer",
      portfolio: "https://mikiejoe.tech/",
      github: "https://github.com/Mikiejoe",
      linkedin: "https://www.linkedin.com/in/joseph-michael-445111235/",
      twitter: "https://x.com/omoshjoe02",
      biosource: "https://mikiejoe.tech/",
      bio: "As a Software Developer and Events Organizer at MMUST iHub, I’m an aspiring full-stack developer with a passion for building dynamic, user-centric web and mobile applications. My experience with Django, React, Flutter, and Node.js enables me to deliver seamless solutions, from intuitive front-end interfaces to robust back-end systems. Whether creating responsive websites, developing cross-platform mobile apps, or designing efficient APIs, I am committed to crafting innovative and impactful digital experiences.",
    },
    {
      name: "Josphine Gatwiri",
      img: img5,
      role: "Lead Finance Manager || UI/UX Designer",
      portfolio: "",
      github: "https://github.com/JosphineG",
      linkedin: "https://www.linkedin.com/in/josphinegatwiri27/",
      twitter: "https://x.com/angeljosphine34",
      biosource: "https://www.linkedin.com/in/josphinegatwiri27/",
      bio: "I am a UI/UX Designer dedicated to creating impactful digital solutions that enhance user experiences. As a Product and Web Designer, I focus on blending functionality with aesthetics to deliver user-centered designs. Currently, I serve as the Finance Manager at MMUST iHub and aspire to make a positive difference through philanthropy.",
    },
    {
      name: "Sebastian Chanzu",
      img: img6,
      role: "Digital Marketing Lead || Data Scientist",
      portfolio: "",
      github: "https://github.com/SebbieMzingKe",
      linkedin: "https://www.linkedin.com/in/sebbie-evayo-3249a9250/",
      twitter: "https://x.com/sebbiemzing",
      biosource: "https://www.linkedin.com/in/sebbie-evayo-3249a9250/",
      bio: "As a Data Analyst and Cloud Computing enthusiast, I currently serve as the Health IT Lead at MMUST and am part of the KamiLimu Cohort 8.0. Additionally, I work as a Digital Marketer at MMUST iHub, leveraging my skills in Data Science, Data Analysis, Cloud Computing, and Machine Learning to drive impactful initiatives.",
    },
    {
      name: "Valencia Neema",
      img: img7,
      role: "Lead Mentor || Data Scientist",
      portfolio: "",
      biosource: "https://www.linkedin.com/in/valencia-neema-162130287/",
      github: "https://github.com/lencemmust",
      linkedin: "https://www.linkedin.com/in/valencia-neema-162130287/",
      twitter: "https://x.com/neemavalencia",
      bio: " I am a Lead Mentor at MMUST iHub, passionate about data science and machine learning. I am deeply intrigued by the possibilities of AI and its potential to transform industries.",
    },
  ];
const truncateBio = (bio) => {
  const maxLength = 350;
  if (bio.length > maxLength) {
    return `${bio.slice(0, maxLength)}... `;
  }
  return bio;
};
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
                {member?.portfolio && (
                  <a
                    href={member.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLink className="hover:scale-125 hover:text-tersiary h-[20px] w-[20px] transition-all duration-300 ease-in-out" />
                  </a>
                )}
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
