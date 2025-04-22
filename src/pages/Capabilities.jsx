import React from "react";
import CapabilitiesComponent from "../components/Capabilities/CapabilitiesComponent.jsx";
import Footer from "../components/Footer/Footer.jsx";
import PageTransition from "../components/Animations/PageTransition.jsx";

function Capabilities() {
  return (
    <>
      <CapabilitiesComponent />

      <div className="bg-black">
        <Footer />
      </div>
    </>
  );
}

export default PageTransition(Capabilities);
