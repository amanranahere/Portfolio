import React from "react";
import PageTransition from "../components/Animations/PageTransition.jsx";
import ProjectsListComponent from "../components/Work/ProjectsListComponent.jsx";
import Footer from "../components/Footer/Footer.jsx";

function Work() {
  return (
    <div className="bg-[#161616] text-[#f3f1ec] pt-20">
      <div>
        <ProjectsListComponent />
      </div>

      <Footer />
    </div>
  );
}

export default PageTransition(Work);
