import React, { useState } from "react";
import Header from "../components/common/Header";
import Sidebar from "../components/common/Sidebar";
import Footer from "../components/common/Footer";
import BasicPlan from "../components/membership/BasicPlan";
import Testimonial from "../components/Home/Testimonials";
import StandardPlan from "../components/membership/StandardPlan";
import PremiumPlan from "../components/membership/PremiumPlan";
function MembershipPage() {
  const [showSideBar, setShowSidebar] = useState(false);
  return (
    <div>
      <Header setShowSidebar={setShowSidebar} />
      <Sidebar showSideBar={showSideBar} />
      <BasicPlan />
      <StandardPlan />
      <PremiumPlan />
      <div className="pb-[180px]">
        <Testimonial />
      </div>
      <Footer />
    </div>
  );
}

export default MembershipPage;
