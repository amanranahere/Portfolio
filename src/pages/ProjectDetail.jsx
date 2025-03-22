import React from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer/Footer.jsx";
import Weblog from "../components/Projects/Weblog.jsx";
import Vidron from "../components/Projects/Vidron.jsx";
import CurrencyConverter from "../components/Projects/CurrencyConverter.jsx";
import HungrySnake from "../components/Projects/HungrySnake.jsx";
import FlappyBird from "../components/Projects/FlappyBird.jsx";
import BrickBreaker from "../components/Projects/BrickBreaker.jsx";

const project = {
  weblog: <Weblog />,
  vidron: <Vidron />,
  currencyConverter: <CurrencyConverter />,
  hungrySnake: <HungrySnake />,
  flappyBird: <FlappyBird />,
  brickBreaker: <BrickBreaker />,
};

const ProjectDetail = () => {
  const { projectName } = useParams();
  return (
    <>
      <div className="mb-[75vh] md:mb-[50vh] lg:mb-[80vh] bg-[#1c1d21]">
        {project[projectName] ? (
          project[projectName]
        ) : (
          <h1 className="p-10 uppercase font-bold text-xl text-[#333]">
            Project not found :(
          </h1>
        )}
      </div>

      <Footer />
    </>
  );
};

export default ProjectDetail;
