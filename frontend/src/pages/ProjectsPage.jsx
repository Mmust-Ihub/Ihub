import React, { useState } from "react";
import Header from "../components/common/Header";
import Sidebar from "../components/common/Sidebar";
import Footer from "../components/common/Footer";
import Testimonials from "../components/Home/Testimonials";
import Projects from "../components/Projects/Projects";
import Hero from "../components/Projects/Hero";
function ProjectsPage() {
  const [showSideBar, setShowSidebar] = useState(false);
  return (
    <div>
      <Header setShowSidebar={setShowSidebar} />
      <Sidebar showSideBar={showSideBar} />
      <Hero />
      <div className="flex justify-center">
        <Projects />
      </div>
      <div className="pb-[150px]">
     
        <Testimonials />
      </div>
      <Footer />
    </div>
  );
}

export default ProjectsPage;
