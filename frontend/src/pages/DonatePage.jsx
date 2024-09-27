import React, { useState } from "react";
import Header from "../components/common/Header";
import Sidebar from "../components/common/Sidebar";
import Footer from "../components/common/Footer";
import DonateHero from "../components/donate/DonateHero";
import Main from "../components/donate/Main";
// import StripeUi from "../components/donate/StripeUi";

function DonatePage() {
  const [showSideBar, setShowSidebar] = useState(false);
  return (
    <div>
      <Header setShowSidebar={setShowSidebar} />
      <Sidebar showSideBar={showSideBar} />
      <DonateHero />
      <Main />
      {/* <StripeUi/> */}
      <Footer />
    </div>
  );
}

export default DonatePage;
