import React, { useState } from "react";
import Header from "../components/common/Header";
import Sidebar from "../components/common/Sidebar";
import Footer from "../components/common/Footer";
import Hero from "../components/Contact/Hero";
import Main from "../components/Contact/Main";
import LiveLocationMap from "../components/Contact/LiveLocationMap";

function Contact() {
  const [showSideBar, setShowSidebar] = useState(false);
  return (
    <div>
      <Header setShowSidebar={setShowSidebar} />
      <Sidebar showSideBar={showSideBar} />
      <Hero />
      <Main />
      <LiveLocationMap />
      <Footer />
    </div>
  );
}

export default Contact;
