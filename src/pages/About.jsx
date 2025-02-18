import React from "react";
import PageTransition from "../components/Transitions/PageTransition";

function About() {
  return (
    <div className="h-screen text-xl flex justify-center items-center">
      About page
    </div>
  );
}

export default PageTransition(About);
