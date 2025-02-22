import React from "react";
import { useParams } from "react-router-dom";
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
  return project[projectName] || <h1>Project not found :(</h1>;
};

export default ProjectDetail;
