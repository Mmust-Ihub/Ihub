import React, { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import Logo from "../../../assets/webp/Logo.webp";
import { motion } from "framer-motion";
// import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        ease: "linear",
        duration: 0.6,
      }}
      className="w-full text-white flex flex-row bg-white shadow-sm shadow-black  justify-between items-center fixed top-0 left-0 mb-10 md:px-20 lg:px-40 max-[768px]:px-10 z-50"
    >
      <div className=" text-blue-[#00043c] flex items-center">
        <a href="/">
          <img
            className="w-[70px] object-contain h-[60px]  cursor-pointer "
            src={Logo}
            alt=""
          />
        </a>
      </div>
      <div className="flex gap-10 text-blue-800 ">
        <ul className="hidden md:flex flex-row gap-10">
          <li className="active:text-purple-600 hover:text-purple-600">
            <a href="/admin/add-project">Add Project</a>
          </li>
          <li className="active:text-purple-600 hover:text-purple-600">
            <a href="/admin/add-event">Add event</a>
          </li>
          <li className="active:text-purple-600 hover:text-purple-600">
            <a href="Add-testimonial">Add Testimonial</a>
          </li>
          {/* <li className="active:text-purple-600 hover:text-purple-600">
            <a href="#events">Events</a>
          </li> */}
          <li className="active:text-purple-600 hover:text-purple-600">
            <a href="#community">Community</a>
          </li>
          <li className="active:text-purple-600 hover:text-purple-600">
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <ul
          className={`${
            isMenuOpen
              ? "min-[768px]:visible absolute top-0 left-0 w-screen h-screen bg-[rgba(0,0,0,.9)] flex flex-col justify-center items-center md:hidden transition-all duration-500 ease-in-out "
              : "hidden"
          } md:fle flex-row w-full h-full gap-10 transition-all duration-500 ease-in-out md:hidden`}
        >
          <li className="active:text-purple-600 hover:text-purple-600">
            <a href="#about" onClick={toggleMenu}>
              About
            </a>
          </li>
          <li className="active:text-purple-600 hover:text-purple-600">
            <a href="#services" onClick={toggleMenu}>
              Services
            </a>
          </li>
          <li className="active:text-purple-600 hover:text-purple-600">
            <a href="#products" onClick={toggleMenu}>
              Projects
            </a>
          </li>
          {/* <li className="active:text-purple-600 hover:text-purple-600">
            <a href="#events" onClick={toggleMenu}>
              Events
            </a>
          </li> */}
          <li className="active:text-purple-600 hover:text-purple-600">
            <a href="#community" onClick={toggleMenu}>
              Community
            </a>
          </li>
          <li className="active:text-purple-600 hover:text-purple-600">
            <a href="#contact" onClick={toggleMenu}>
              Contact
            </a>
          </li>
        </ul>
        <div
          className={`min-[768px]:hidden cursor-pointer z-50`}
          onClick={toggleMenu}
        >
          <TiThMenu />
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
