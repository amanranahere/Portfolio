import React from "react";
import CapabilitiesComponent from "../components/Capabilities/CapabilitiesComponent.jsx";
import Footer from "../components/Footer/Footer.jsx";
import PageTransition from "../components/Animations/PageTransition.jsx";

function Capabilities() {
  return (
    <>
      <div className="border-b-2 border-white">
        <CapabilitiesComponent />
      </div>

      <Footer />
    </>
  );
}

export default PageTransition(Capabilities);
