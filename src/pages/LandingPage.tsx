import React from "react";
import NavBar from "../components/UI/other/NavBar";
import Banner from "../components/UI/other/Banner";
import FeaturesSection from "../components/UI/other/FeaturesSection";
import HowToUse from "../components/UI/other/HowToUse";
import ContactSection from "../components/UI/other/ContactSection";
import Footer from "../components/UI/other/Footer";
import AboutMe from "../components/UI/other/AboutMe";
import Testimonials from "../components/UI/other/Testimonials";

const LandingPage: React.FC = () => {
  return (
    <div className="scrollbar-hide h-full w-screen overflow-y-scroll">
      <NavBar />
      <Banner />
      <HowToUse />
      <FeaturesSection />
      <AboutMe />
      <ContactSection />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default LandingPage;
