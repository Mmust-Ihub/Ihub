import React from "react";
import { Link } from "react-router-dom";
import serviceimg from "../../assets/standard.png";
import { motion } from "framer-motion";
function StandardPlan() {
  return (
    <div className="w-screen px-6 lg:px-12 py-8 text-black" id="standard">
      <div className="w-full flex lg:flex-row flex-col items-start justify-center  ">
        <motion.div
          className="w-full lg:w-[50%] lg:mt-[-16px]"
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.9,
          }}
        >
          <img
            src={serviceimg}
            alt="pointer hand image"
            className="lg:w-[450px] lg:h-[300px] object-contain "
          />
        </motion.div>
        <div className="w-full lg:w-[50%] lg:ml-[60px]">
          {" "}
          <h2 className="text-secondary font-bold text-2xl mt-8 mb-4">
            Standard Membership
          </h2>
          <p className="w-full lg:w-[85%] text-lg">
            Ideal for growing startups and professionals looking to scale, this
            tier offers enhanced access to our facilities, mentorship programs,
            and funding opportunities
          </p>
          <p className="text-tersiary mt-2 font-semibold text-lg">Benefits</p>
          <br />
          <ul className="w-full lg:w-[85%] grid lg:grid-cols-2  grid-cols-1 gap-4 text-md">
            <li className="planlist truncate">Enhanced Resource Access</li>
            <li className="planlist truncate">Weekly Newsletter</li>
            <li className="planlist truncate">
              Priority Community Forum Access
            </li>
            <li className="planlist truncate">Extended Event Participation</li>
            <li className="planlist truncate">Discounts on Workshops</li>
          </ul>
          <div>
            <Link
              to={"#"}
              className="bg-secondary px-4 h-[35px]  rounded-[60px] text-white font-[500] hover:opacity-75 shadow-xl flex items-center gap-2 lg:px-6 mt-6 w-[200px] text-center justify-center hover:scale-105  transition-all duration-200 ease-in-out "
            >
              Become A Member
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StandardPlan;
