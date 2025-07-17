import React from 'react'
import { GrMoney } from "react-icons/gr";
import { GiTeacher } from "react-icons/gi";
import { PiPlantBold } from "react-icons/pi";
import { FaHandHoldingMedical } from "react-icons/fa6";
import { FaCloudSunRain } from "react-icons/fa6";
import { SiHiveBlockchain } from "react-icons/si";
import { GiBrain } from "react-icons/gi";
import { AiFillApi } from "react-icons/ai";
import FocusCard from './FocusCard';

const FocusArea = [
  {
    icon: PiPlantBold,
    title: "AgriTech",
    link: "/projects/agritech",
  },
  {
    icon: AiFillApi,
    title: "IoT",
    link: "/projects/iot",
  },
    {
    icon: GiBrain,
    title: "AI/ML",
    link: "/projects/ai-ml",
  },
  {
    icon: GiTeacher,
    title: "Edutech",
    link: "/projects/edutech",
  },
  {
    icon: FaHandHoldingMedical,
    title: "HealthTech",
    link: "/projects/healthtech",
  },
  {
    icon: FaCloudSunRain,
    title: "ClimateTech",
    link: "/projects/climatetech",
  },
  {
    icon: SiHiveBlockchain,
    title: "Blockchain",
    link: "/projects/blockchain",
  },
   {
    icon: GrMoney,
    title: "Fintech",
    link: "/projects/fintech",
  }
];

function Projects() {
  return (
    <div className="py-7">
      <div className="flex flex-col items-center mt-10">
        <h1 className="lg:text-4xl md:text-2xl text-xl font-bold text-gray-800">
          Areas of focus
        </h1>
        <p className='mt-2'>Explore our project Categories</p>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-1'>
          {FocusArea.map((focus, index) => (
            <FocusCard
              
              key={index}
              delay={index*100}
              icon={focus.icon}
              title={focus.title}
              link={focus.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects
