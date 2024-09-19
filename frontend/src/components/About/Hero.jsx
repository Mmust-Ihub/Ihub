import React from "react";
import aboutimg from "../../assets/webp/about1.webp";
import { motion } from "framer-motion";
function Hero() {
  return (
    <div className="w-screen lg:h-screen px-6 lg:px-12 py-8 text-white aboutbg mt-0 flex flex-col justify-center items-center pt-[100px] lg:pt-0">
      <div className="w-full flex lg:flex-row flex-col items-start justify-between  ">
        <motion.div
          className="w-full lg:w-[30%] lg:ml-[60px] flex items-center justify-center origin-center"
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1, rotate: 360 }}
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
        <motion.div
          className="w-full lg:w-[50%]"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            ease: "linear",
            duration: 0.9,
          }}
        >
          {" "}
          <h2 className="text-secondary font-bold text-3xl mt-8 mb-4">
            Who We Are
          </h2>
          <p className="w-full lg:w-[85%] text-lg">
            MMUST iHub is the innovation arm of Masinde Muliro University of
            Science and Technology (MMUST), dedicated to fostering creativity,
            collaboration, and cutting-edge solutions. <br /> <br />
            We are a vibrant community of innovators, entrepreneurs,
            researchers, and students who come together to turn bold ideas into
            impactful realities. Our hub provides a nurturing environment where
            talent meets opportunity, and where ideas are transformed into
            tangible outcomes that address real-world challenges
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
