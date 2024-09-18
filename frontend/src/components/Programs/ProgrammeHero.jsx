import React from "react";
import programmeimg from "../../assets/programmes/space.webp";
import mentorship from "../../assets/programmes/people.webp";
import networking from "../../assets/programmes/networking.webp";
import alumni from "../../assets/programmes/alumni.webp";
import HeroRight from "./HeroRight";
import HeroLeft from "./HeroLeft";
function ProjectHero() {
  return (
    <>
      <HeroRight
        image={programmeimg}
        description={
          "Our Incubation and Acceleration Programs are designed to nurture startups at every stage of development. Whether you're in the early ideation phase or ready to scale, we provide the resources, mentorship, and support you need to turn your innovative ideas into successful businesses."
        }
        title={" Incubation & Acceleration Programs"}
      />
      <HeroLeft
        title={"Mentorship Programs"}
        description={
          "Our Mentorship Programs connect you with seasoned entrepreneurs and industry experts who provide personalized guidance and insights. Whether you’re looking to refine your business model, expand your market reach, or overcome specific challenges, our mentors are here to help you navigate the journey to success"
        }
        image={mentorship}
        bg={"bg-[#E0F7FA]"}
      />
      <HeroRight
        image={networking}
        description={
          "We host a variety of Networking Events, Workshops, and Training sessions to keep you ahead in the fast-evolving world of innovation. These events provide opportunities to connect with like-minded individuals, learn from industry leaders, and gain practical skills essential for entrepreneurship"
        }
        title={"Networking Events,Workshops&Training"}
      />
      <div className="mb-[100px]">
        <HeroLeft
          title={"Alumni Network"}
          description={
            "Joining MMUST iHub means becoming part of a vibrant Alumni Network that spans across various industries. Our alumni have gone on to achieve remarkable success, and we continue to support their growth through exclusive networking opportunities, ongoing mentorship, and collaborative projects"
          }
          image={alumni}
          bg={"bg-[#fff]"}
        />
      </div>
    </>
  );
}

export default ProjectHero;
