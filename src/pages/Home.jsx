import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import PageTransition from "../components/Animations/PageTransition.jsx";
import LandingSection from "../components/Home/LandingSection.jsx";
import AboutSection from "../components/Home/AboutSection.jsx";
import WorkSection from "../components/Home/WorkSection.jsx";
import CapabilitiesSection from "../components/Home/CapabilitiesSection.jsx";
import ContactSection from "../components/Home/ContactSection.jsx";
import Footer from "../components/Footer/Footer.jsx";

function Home() {
  const location = useLocation();

  useEffect(() => {
    const handleScrollToContact = () => scrollToContactSection();
    window.addEventListener("scrollToContact", handleScrollToContact);

    const handleScrollToAbout = () => scrollToAboutSection();
    window.addEventListener("scrollToAbout", handleScrollToAbout);

    if (location.state?.scrollToContact) {
      setTimeout(() => {
        scrollToContactSection();
      }, 1000);
    }

    if (location.state?.scrollToAbout) {
      setTimeout(() => {
        scrollToAboutSection();
      }, 1000);
    }

    return () => {
      window.removeEventListener("scrollToContact", handleScrollToContact);
      window.removeEventListener("scrollToAbout", handleScrollToAbout);
    };
  }, [location]);

  const scrollToContactSection = () => {
    const section = document.getElementById("contactSection");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToAboutSection = () => {
    const section = document.getElementById("aboutSection");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[#161616]">
      <div className="">
        <LandingSection />
      </div>

      <div className="border-b border-[#4a4a4a] m-5 lg:m-10"></div>

      <div id="aboutSection">
        <AboutSection />
      </div>

      <div className="border-b border-[#4a4a4a] m-5 lg:m-10"></div>

      <div className="">
        <WorkSection />
      </div>

      <CapabilitiesSection />

      <div id="contactSection" className="">
        <ContactSection />
      </div>

      <div className="border-t-2 border-white">
        <Footer />
      </div>
    </div>
  );
}

export default PageTransition(Home);
