import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FaTimes, FaDonate } from "react-icons/fa";
import { HiMenuAlt1 } from "react-icons/hi";

import LogoImg from "../../assets/webp/Logo.webp";
import { motion } from "framer-motion";
const Header = ({ setShowSidebar }) => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setShowSidebar((prevState) => !prevState);
  };
  const { pathname } = useLocation();

  return (
    <>
      <motion.div
        className="bg-white z-[9999] sticky"
        initial={{ y: "-100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          ease: "easeInOut",
          duration: 0.6,
          // delay: 0.01,
        }}
      >
        <div
          className="p-4 text-danger"
          style={{
            background:
              "repeating-linear-gradient(-55deg, #222, rgb(34, 34, 34) 10px, rgb(234, 179, 8) 10px, rgb(234, 179, 8) 20px)",
          }}
        ></div>
        <div className="p-4 text-center text-black bg-yellow-500 font-bold">
          SITE UNDER CONSTRUCTION...
        </div>
      </motion.div>
      <motion.header
        className="sticky top-0 right-0 bg-white w-screen text-black shadow-xl z-[9999] justify-between items-center px-6 flex h-[80px] text-center"
        initial={{ y: "-100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          ease: "linear",
          duration: 0.6,
        }}
      >
        <div className="w-full py-3 sm:py-0 relative">
          <div className="w-full flex justify-between items-center">
            {/* logo */}
            <div className="flex items-center justify-center ">
              <Link to="/" onClick={window.scrollTo(0, 0)}>
                <div className="flex h-full gap-2 items-center font-semibold justify-center lg:ml-16">
                  <img
                    src={LogoImg}
                    alt="mmust ihub logo image"
                    className="lg:h-28 object-contain lg:w-28 w-24 h-24"
                  />
                </div>
              </Link>
            </div>
            {/*desktop navlinks */}
            <div className="hidden   ml-20 lg:block">
              <ul className="flex items-center gap-8">
                <li className="relative group cursor-pointer hover:animate-bounce">
                  <NavLink
                    to={"/about"}
                    className={`${pathname == "/about" && "activeLink"} h-full`}
                  >
                    About
                  </NavLink>
                </li>
                <li className="relative hover:animate-bounce group cursor-pointer">
                  <NavLink
                    to={"/programs"}
                    className={`${pathname == "/programs" && "activeLink"}`}
                  >
                    Programs
                  </NavLink>
                </li>
                <li className="hover:animate-bounce">
                  <NavLink
                    className={`${pathname == "/projects" && "activeLink"}`}
                    activeclassname="active"
                    to="/projects"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Projects
                  </NavLink>
                </li>
                <li className="hover:animate-bounce">
                  <NavLink
                    className={`${pathname == "/membership" && "activeLink"}`}
                    activeclassname="active"
                    to="/membership"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Membership
                  </NavLink>
                </li>

                <li className="hover:animate-bounce">
                  <NavLink
                    className={`${
                      pathname == "/communityandevents" && "activeLink"
                    }`}
                    activeclassname="active"
                    to="/communityandevents"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Community & Events
                  </NavLink>
                </li>
                <li className="hover:animate-bounce">
                  <NavLink
                    to="/contact"
                    className={`${pathname == "/contact" && "activeLink"}`}
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="flex flex-row-reverse gap-2 justify-center items-center ">
              {/* mobile menubar */}
              <div className="flex items-center gap-4">
                <div className="lg:hidden block">
                  {!showMenu ? (
                    <HiMenuAlt1
                      onClick={toggleMenu}
                      className="cursor-pointer transition-all"
                      size={30}
                    />
                  ) : (
                    <FaTimes
                      onClick={toggleMenu}
                      className="cursor-pointer transition-all"
                      size={30}
                    />
                  )}
                </div>
              </div>

              <Link
                to={"/donate"}
                className="bg-secondary px-4 h-[30px]  rounded-[60px] text-white font-[500] hover:opacity-75 hover:scale-105  transition-all duration-200 ease-in-out shadow-xl flex items-center gap-2 lg:px-6"
              >
                <FaDonate />
                <span>Donate</span>
              </Link>
            </div>
          </div>
        </div>
      </motion.header>
    </>
  );
};
export default Header;
