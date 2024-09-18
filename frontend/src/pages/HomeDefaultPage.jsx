import React, { useState } from "react";
import Header from "../components/common/Header";
import Sidebar from "../components/common/Sidebar";
import Footer from "../components/common/Footer";
import Hero from "../components/Home/Hero";
import About from "../components/Home/About";
import Services from "../components/Home/Services";
import Testimonials from "../components/Home/Testimonials";
import Membership from "../components/Home/Membership";
import Sponser from "../components/Home/Sponser";

function Homepage() {
  const [showSideBar, setShowSidebar] = useState(false);

  return (
    <div>
      <Header setShowSidebar={setShowSidebar} />
      <Sidebar showSideBar={showSideBar} />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      {/* <Membership /> */}
      <Sponser />
      <Footer />
    </div>
  );
}

export default Homepage;
