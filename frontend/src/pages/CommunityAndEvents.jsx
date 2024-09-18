import React, { useState } from "react";
import Header from "../components/common/Header";
import Sidebar from "../components/common/Sidebar";
import Footer from "../components/common/Footer";
import Hero from "../components/communityandevents/Hero";
import JoinHero from "../components/communityandevents/JoinHero";
import Events from "../components/communityandevents/Events";

function CommunityAndEvents() {
  const [showSideBar, setShowSidebar] = useState(false);
  return (
    <div>
      <Header setShowSidebar={setShowSidebar} />
      <Sidebar showSideBar={showSideBar} />
      <Hero />
      <div className="flex flex-col w-screen items-center">
        <JoinHero />
        <Events />
        <Footer />
      </div>
    </div>
  );
}

export default CommunityAndEvents;
