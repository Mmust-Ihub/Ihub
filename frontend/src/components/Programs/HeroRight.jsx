import React from "react";
import { motion } from "framer-motion";

function HeroRight(img) {
  const { image, description, title } = img;
  return (
    <div className="w-screen overflow-clip py-4  flex flex-col lg:flex-row px-2 justify-center items-center my-5 pt-[80px]">
      <div className="w-full  flex lg:flex-row justify-center lg:max-w-[80%] flex-col items-center space-x-12">
        <motion.div
          className="flex-2 flex justify-center items-center w-full mb-8"
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.9,
          }}
        >
          <img
            src={image}
            alt="togetherness image"
            className="lg:w-[100%] lg:h-[350px] object-contain w-[60%]"
          />
        </motion.div>
        <div className=" lg:space-y-4 space-y-3 w-full">
          <h2 className="text-secondary font-bold text-2xl mt-8 mb-4">
            {title}
          </h2>
          <p className="w-[80%]">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default HeroRight;
