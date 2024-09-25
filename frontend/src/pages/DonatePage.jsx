import React, { useState } from "react";
import Header from "../components/common/Header";
import Sidebar from "../components/common/Sidebar";
import Footer from "../components/common/Footer";
import DonateHero from "../components/donate/DonateHero";
// import StripeUi from "../components/donate/StripeUi";

function DonatePage() {
  const [showSideBar, setShowSidebar] = useState(false);
  return (
    <div>
      <Header setShowSidebar={setShowSidebar} />
      <Sidebar showSideBar={showSideBar} />
      <DonateHero />
      {/* <StripeUi/> */}
      <Footer />
    </div>
  );
}

export default DonatePage;
