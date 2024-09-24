import React, { useState } from "react";
import Header from "../components/common/Header";
import Sidebar from "../components/common/Sidebar";
import Footer from "../components/common/Footer";
import Testimonials from "../components/Home/Testimonials";
import Projects from "../components/Projects/Projects";
function ProjectsPage() {
  const [showSideBar, setShowSidebar] = useState(false);
  return (
    <div>
      <Header setShowSidebar={setShowSidebar} />
      <Sidebar showSideBar={showSideBar} />
      <div className="flex justify-center">
        <Projects />
      </div>
      <Testimonials />
      <Footer />
    </div>
  );
}

export default ProjectsPage;
