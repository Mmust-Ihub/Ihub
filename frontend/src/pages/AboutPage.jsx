import React, { useState } from "react";
import Header from "../components/common/Header";
import Sidebar from "../components/common/Sidebar";
import Footer from "../components/common/Footer";
import Hero from "../components/About/Hero";
import MissionVision from "../components/About/MissionVision";
import OurTeam from "../components/About/OurTeam";
import Impact from "../components/About/Impact";

function AboutPage() {
  const [showSideBar, setShowSidebar] = useState(false);
  return (
    <div>
      <Header setShowSidebar={setShowSidebar} />
      <Sidebar showSideBar={showSideBar} />
      <Hero />
      <MissionVision />
      <OurTeam />
      <Impact />
      <Footer />
    </div>
  );
}

export default AboutPage;
