import React from "react";
import ProjectTemplate from "./ProjectTemplate";
import SnakeGameVideo from "../../assets/videos/snakeGame_vid.mp4";
import SnakeGameImage from "../../assets/images/snakeGame.png";
import SnakeGameOverImage from "../../assets/images/snakeGameOver.png";
import { motion } from "framer-motion";

import { SiJavascript, SiHtml5, SiCss3 } from "react-icons/si";

function HungrySnake() {
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
      projectName="HUNGRY SNAKE"
      projectTagline="A simple browser-based Snake game"
      projectLink="https://amanranahere.github.io/Hungry-Snake"
      projectVideo={SnakeGameVideo}
      projectYear="2024"
      projectOverview="Snake Game is a simple implementation of the classic Snake game using HTML, CSS, and JavaScript. The goal is to navigate the snake, eat food, and grow longer while avoiding collisions with the walls or itself. With each piece of food consumed, the snake increases in size, moves faster, and the score goes up. The game ends if the snake crashes, challenging players to survive as long as possible."
      projectMaking01="I built this project when I had just started coding, and it was one of my first experiences working with JavaScript to create an interactive game. The logic for moving the snake, detecting collisions, and dynamically generating food was a fun challenge, and it helped me understand how to update the DOM efficiently."
      projectMaking02="One interesting feature I added was local storage to save the highest score. This allowed me to get hands-on experience with storing and retrieving data from the browser, making the game feel more rewarding for players who wanted to beat their previous high scores. The project also introduced me to handling real-time user input, as the snake's movement is controlled via arrow keys."
      projectMaking03="Overall, this project was a great learning experience in managing game loops, working with JavaScript event listeners, and implementing simple yet engaging game mechanics. Looking back, it's a project that really helped me grasp core JavaScript concepts in a fun and practical way."
      projectCodeLink="https://github.com/amanranahere/Hungry-Snake"
      projectBuiltWith={
        <>
          {builtWith.map((item) => (
            <div
              key={item.name}
              className="border border-white/40 flex items-center gap-2 py-1 px-2"
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
              src={SnakeGameImage}
              alt="Snake Game"
              variants={imageVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.6 }}
            />

            <motion.img
              src={SnakeGameOverImage}
              alt="Snake Game Over"
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

export default HungrySnake;
