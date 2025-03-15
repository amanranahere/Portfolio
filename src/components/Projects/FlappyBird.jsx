import React from "react";
import ProjectTemplate from "./ProjectTemplate";
import FlappyBirdVideo from "../../assets/videos/flappyBird_vid.mp4";
import FlappyBirdImage from "../../assets/images/flappyBird.png";
import FlappyBirdGameOverImg from "../../assets/images/flappyBirdGameOver.png";
import { motion } from "framer-motion";

import { SiJavascript, SiHtml5, SiCss3 } from "react-icons/si";

function FlappyBird() {
  const builtWith = [
    {
      name: "HTML",
      logo: <SiHtml5 className="w-6 h-6 leading-tight" />,
    },
    {
      name: "CSS",
      logo: <SiCss3 className="w-6 h-6" />,
    },
    {
      name: "JavaScript",
      logo: <SiJavascript className="w-6 h-6" />,
    },
  ];

  const imageVariant = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: (delay) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, delay },
    }),
  };

  return (
    <ProjectTemplate
      projectName="FLAPPY BIRD CLONE"
      projectTagline="Flappy Bird game clone made using HTML, CSS and JavaScript"
      projectLink="https://amanranahere.github.io/Flappy-Bird"
      projectVideo={FlappyBirdVideo}
      projectYear="2024"
      projectOverview="Flappy Bird Clone is a simple recreation of the classic Flappy Bird game, built from scratch using JavaScript, HTML, and CSS. The objective is to navigate a bird through a series of pipes by flapping at the right time. The game gets progressively challenging as players try to avoid obstacles and achieve the highest score possible. It features smooth animations, keyboard controls, and score tracking for an engaging experience."
      projectMaking="I built this project as a way to explore game development using JavaScript. One of the biggest realizations I had while working on this was that in many 2D games, it’s not the player that moves forward, but rather the background and obstacles shift to create the illusion of movement. Implementing this concept in my game by making the pipes move while the bird stayed in place was a fun challenge."
      projectCodeLink="https://github.com/amanranahere/Flappy-Bird"
      projectBuiltWith={
        <>
          {builtWith.map((item) => (
            <div
              key={item.name}
              className="border border-black/20 flex items-center gap-2 py-1 px-2"
            >
              {item.logo && item.logo}
              <span className="leading-tight">{item.name}</span>
            </div>
          ))}
        </>
      }
      projectImages={
        <div className="">
          <div className="md:w-[49.5%] flex flex-col md:flex-row justify-between gap-4">
            <motion.img
              src={FlappyBirdImage}
              alt="Flappy Bird"
              variants={imageVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.6 }}
            />

            <motion.img
              src={FlappyBirdGameOverImg}
              alt="Flappy Bird Game Over"
              variants={imageVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.6 }}
            />
          </div>
        </div>
      }
    />
  );
}

export default FlappyBird;
