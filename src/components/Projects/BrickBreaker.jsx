import React from "react";
import ProjectTemplate from "./ProjectTemplate";
import BrickBreakerVideo from "../../assets/videos/brickBreaker_vid.mp4";
import BrickBreakerImg from "../../assets/images/brickBreaker.png";
import BrickBreakerGameOverImg from "../../assets/images/brickBreakerGameOver.png";
import { motion } from "framer-motion";
import MaskingGrid from "../Animations/MaskingGrid";

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

  const delays = builtWith.map(() => Math.random() * 1);

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
          {builtWith.map((item, index) => (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: delays[index], duration: 0.5 }}
              viewport={{ once: true }}
              key={item.name}
              className="border border-white/40 flex items-center gap-2 py-1 px-2"
            >
              {item.logo && item.logo}
              <span className="leading-tight">{item.name}</span>
            </motion.div>
          ))}
        </>
      }
      projectImages={
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div className="md:w-[49.5%] relative">
            <img src={BrickBreakerImg} alt="Brick Breaker" />

            <MaskingGrid
              color="#161616"
              rowSizes={{ sm: 30, md: 45, lg: 120 }}
              columnSizes={{ sm: 60, md: 90, lg: 120 }}
            />
          </div>

          <div className="md:w-[49.5%] relative">
            <img src={BrickBreakerGameOverImg} alt="Brick Breaker Game Over" />

            <MaskingGrid
              color="#161616"
              rowSizes={{ sm: 30, md: 45, lg: 120 }}
              columnSizes={{ sm: 60, md: 90, lg: 120 }}
            />
          </div>
        </div>
      }
    />
  );
}

export default BrickBreaker;
