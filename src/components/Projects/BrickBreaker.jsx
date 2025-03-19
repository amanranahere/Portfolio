import React from "react";
import ProjectTemplate from "./ProjectTemplate";
import BrickBreakerVideo from "../../assets/videos/brickBreaker_vid.mp4";
import BrickBreakerImg from "../../assets/images/brickBreaker.png";
import BrickBreakerGameOverImg from "../../assets/images/brickBreakerGameOver.png";
import { motion } from "framer-motion";

import { SiJavascript, SiHtml5, SiCss3 } from "react-icons/si";

function BrickBreaker() {
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
      projectName="BRICK BREAKER"
      projectTagline="All time favourite arcade game"
      projectLink="https://amanranahere.github.io/Brick-Breaker"
      projectVideo={BrickBreakerVideo}
      projectYear="2024"
      projectOverview="Brick Breaker is a classic arcade-style game where players control a paddle to bounce a ball and break bricks. The goal is to clear all the bricks while keeping the ball in play. This game is built using HTML, CSS, and JavaScript."
      projectMaking01="I built this project as a fun way to practice working with the HTML5 Canvas element in JavaScript. One of the key things I learned was handling collision detection, ensuring that the ball interacts correctly with bricks, the paddle, and the board boundaries."
      projectMaking02="Another interesting aspect was managing game physics, like the ball's movement and how it bounces off different surfaces. I also implemented progressive difficulty, where more rows of bricks are added as the player advances."
      projectMaking03="This project really helped me improve my understanding of game loops, event handling, and working with 2D graphics in JavaScript. It was a great way to apply my knowledge while creating something interactive and enjoyable."
      projectCodeLink="https://github.com/amanranahere/Brick-Breaker"
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
              src={BrickBreakerImg}
              alt="Brick Breaker"
              variants={imageVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.6 }}
            />

            <motion.img
              src={BrickBreakerGameOverImg}
              alt="Brick Breaker Game Over"
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

export default BrickBreaker;
