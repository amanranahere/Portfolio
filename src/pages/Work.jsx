import React, { useState, useEffect } from "react";
import PageTransition from "../components/Transitions/PageTransition.jsx";
import ProjectsListComponent from "../components/Work/ProjectsListComponent.jsx";
import Footer from "../components/Footer/Footer.jsx";

function Work() {
  return (
    <div className="bg-[#f1f1f1] dark:bg-[#1c1d21] pt-20">
      <div>
        <ProjectsListComponent />
      </div>

      <Footer />
    </div>
  );
}

export default PageTransition(Work);
