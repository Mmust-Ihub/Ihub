import React, { useEffect } from "react";
import aboutimg from "../../assets/webp/about.webp";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
function About() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      controls.start({ x: 0, opacity: 1, rotate: 360 });
    }
  }, [controls, inView]);
  return (
    <div className="w-full px-6 lg:px-12 py-8 text-black bg-[#E0F7FA] mt-0">
      <div className="w-full flex lg:flex-row flex-col items-start justify-between  ">
        <motion.div
          className="w-full lg:w-[30%] lg:ml-[60px]"
          initial={{ x: "-100%", opacity: 0 }}
          animate={controls}
          transition={{
            ease: "easeInOut",
            duration: 0.6,
            type: "spring",
            stiffness: 50,
          }}
        >
          <img
            src={aboutimg}
            alt="togetherness image"
            className="lg:w-[450px] lg:h-[350px] object-contain "
          />
        </motion.div>
        <div className="w-full lg:w-[50%]">
          {" "}
          <h2 className="text-secondary font-bold text-2xl mt-8 mb-4" ref={ref}>
            What Mmust Ihub is
          </h2>
          <p className="w-full lg:w-[85%] text-md">
            MMUST iHub is a vibrant innovation hub dedicated to fostering
            <span className="text-tersiary font-semibold">
              {" "}
              creativity, collaboration
            </span>
            , and{" "}
            <span className="text-tersiary font-semibold">
              cutting-edge solutions.
            </span>
            We bring together students, researchers, entrepreneurs, and industry
            professionals to turn bold ideas into impactful realities.
          </p>
          <br />
          <p className="w-full lg:w-[85%] text-md">
            By providing access to state-of-the-art resources, mentorship, and a
            dynamic community, MMUST iHub empowers innovators to tackle
            real-world challenges and shape the future. Whether you're
            developing new technologies, launching a startup, or pursuing
            research, MMUST iHub is the place where your vision can thrive.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
