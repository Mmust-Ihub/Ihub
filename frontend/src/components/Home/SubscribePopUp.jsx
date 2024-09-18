import { useAnimation, motion } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

function SubscribePopUp({ inView }) {
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({ x: 0, y: 0, opacity: 1, rotate: 360 });
    }
  }, [controls, inView]);
  return (
    <motion.div
      className="bg-secondary w-[95vw] lg:w-[700px] rounded-xl px-4 py-8 gap-6 flex flex-col items-center justify-center shadow-md shadow-[#000] origin-top"
      initial={{ x: "0", y: "-1000%", opacity: 0 }}
      animate={controls}
      transition={{
        ease: "easeInOut",
        duration: .9,
        type: "spring",
        stiffness: 50,
      }}
    >
      <div className="justify-start flex w-full">
        <h3 className="font-bold text-left truncate">
          Subscribe to our Newsletter to get latest <br />
          Updates on Events and Ongoing Activities
        </h3>
      </div>
      <div className="w-full flex flex-row gap-[6px]  lg:gap-[12px] justify-center items-center">
        <input
          type="email"
          name=""
          id=""
          required
          className="text-black rounded-lg px-2 h-[40px] w-full outline-green-500"
          placeholder="Enter Your Email..."
        />
        <button className="bg-tersiary px-2 h-[40px]  rounded-[60px] text-white font-[500]  shadow-xl text-center hover:scale-105  transition-all duration-200 ease-in-out shadow-black lg:px-16">
          Subscribe
        </button>
      </div>
    </motion.div>
  );
}

export default SubscribePopUp;
