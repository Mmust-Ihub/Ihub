import React, { useState } from "react";
import Header from "../components/common/Header";
import Sidebar from "../components/common/Sidebar";
import Footer from "../components/common/Footer";
import MainProgrammes from "../components/Programs/MainProgrammes";
function ProgramsPage() {
  const [showSideBar, setShowSidebar] = useState(false);
  return (
    <div>
      <Header setShowSidebar={setShowSidebar} />
      <Sidebar showSideBar={showSideBar} />
      <MainProgrammes/>
      <Footer />
    </div>
  );
}

export default ProgramsPage;
