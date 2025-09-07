import React from "react";
import NavBar from "../components/UI/other/NavBar";
import Banner from "../components/UI/other/Banner";
import FeaturesSection from "../components/UI/other/FeaturesSection";
import HowToUse from "../components/UI/other/HowToUse";

const LandingPage: React.FC = () => {
  return (
    <div className="scrollbar-hide h-full w-screen overflow-y-scroll">
      <NavBar />
      <Banner />
      <HowToUse />
      <FeaturesSection />
    </div>
  );
};

export default LandingPage;
