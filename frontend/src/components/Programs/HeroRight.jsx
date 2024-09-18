import React from 'react'
import { motion } from "framer-motion";


function HeroRight(img) {
    const { image, description, title } = img;
    return (
      <div className="w-screen overflow-clip py-4  flex flex-col lg:flex-row px-2 justify-center items-center my-5">
        <div className="w-full  flex lg:flex-row justify-between lg:max-w-[80%] flex-col items-center space-x-12">
          <motion.div
            className="flex-2 "
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
              className="w-[100%] lg:h-[350px] object-contain"
            />
          </motion.div>
          <div className=" lg:space-y-4 space-y-3 w-full">
            <h1 className="text-[#02CCFE] font-bold lg:text-[24px]">{title}</h1>
            <p className="w-[80%]">{description}</p>
          </div>
        </div>
      </div>
    );
}

export default HeroRight