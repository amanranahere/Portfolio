import React from "react";
import PageTransition from "../components/Transitions/PageTransition.jsx";
import FirstSection from "../components/Home/FirstSection.jsx";
import SecondSection from "../components/Home/SecondSection.jsx";

function Home() {
  return (
    <>
      <FirstSection />
      <SecondSection />
    </>
  );
}

export default PageTransition(Home);
