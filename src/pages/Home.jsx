import React from "react";
import PageTransition from "../components/Transitions/PageTransition";
import FirstSection from "../components/Home/FirstSection";

function Home() {
  return (
    <>
      <FirstSection />
    </>
  );
}

export default PageTransition(Home);
