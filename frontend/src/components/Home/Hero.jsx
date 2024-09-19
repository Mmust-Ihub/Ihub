import React from "react";
import vectors from "../../assets/Blobs2.svg";
import bulb from "../../assets/webp/bulb.webp";
import { motion } from "framer-motion";
function Hero() {
  return (
    <div className="w-screen h-screen  relative flex items-center justify-center overflow-y-clip herobg ">
      <div className="flex w-full flex-col lg:flex-row items-center px-6 lg:px-12 z-[9]  lg:pt-0 gap-[150px]">
        <motion.div
          className="w-full lg:w-[45%] space-y-4 flex flex-col justify-center lg:items-start lg:pl-[80px] pt-12 lg:pt-0"
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.9,
          }}
        >
          <h1 className=" md:text-4xl text-3xl lg:text-[2.6rem] md:font-extrabold lg:leading-[2.9rem] font-bold text-white leading-10">
            Ignite Innovation,{" "}
            <span className="text-secondary">
              <br />
              Transforming Ideas <br />
              into Reality!
            </span>
          </h1>
          <p className="text-white w-full leading-relaxed">
            Welcome to <span className="font-bold">MMUST iHub</span>, where{" "}
            <span className="font-bold">collaboration meets creativity</span>{" "}
            and <span className="font-bold">innovation knows no bounds</span>.
            Join us on the forefront of technological and creative
            breakthroughs, as we bring together visionary minds to shape the
            future and transform ideas into reality.
          </p>
          <motion.a
            href="/donate"
            className="bg-secondary px-[60px] text-center py-2 rounded-[60px] text-white font-[500] hover:opacity-75 mt-[20px] w-full 
            lg:w-[50%] shadow-xl"
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              ease: "easeInOut",
              duration: 0.6,
            }}
          >
            Join Us
          </motion.a>
        </motion.div>
        <motion.div
          className="hidden lg:flex"
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.3,
          }}
        >
          <img
            src={bulb}
            alt="bulb image"
            className="lg:w-[450px]  w-[200px] lg:object-cover mt-[-50px]"
          />
        </motion.div>
      </div>
      <motion.div
        className="w-screen absolute bottom-[-184px]  flex h-[375px] lg:bottom-[-225px] xl:bottom-[-225px] herobg xll:h-[530px]"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          ease: "linear",
          duration: 0.6,
        }}
      >
        <img
          src={vectors}
          alt="image vectors"
          className=" w-full h-full lg:object-cover"
        />
      </motion.div>
    </div>
  );
}

export default Hero;
