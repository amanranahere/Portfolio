import React from "react";
import PageTransition from "../components/Transitions/PageTransition.jsx";
import LandingSection from "../components/Home/LandingSection.jsx";
import AboutSection from "../components/Home/AboutSection.jsx";
import WorkSection from "../components/Home/WorkSection.jsx";
import CapabilitiesSection from "../components/Home/CapabilitiesSection.jsx";
import ContactSection from "../components/Home/ContactSection.jsx";
import Footer from "../components/Footer/Footer.jsx";

function Home() {
  return (
    <>
      <LandingSection />

      <AboutSection />

      <WorkSection />

      <CapabilitiesSection />

      <ContactSection />

      <Footer />
    </>
  );
}

export default PageTransition(Home);
