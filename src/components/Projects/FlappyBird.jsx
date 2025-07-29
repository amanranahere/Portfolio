import ProjectTemplate from "./ProjectTemplate";
import FlappyBirdImage from "../../assets/images/flappyBird.png";
import FlappyBirdGameOverImg from "../../assets/images/flappyBirdGameOver.png";
import { motion } from "framer-motion";
import MaskingGrid from "../Animations/MaskingGrid";

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

  const delays = builtWith.map(() => Math.random() * 1);

  return (
    <ProjectTemplate
      projectName="FLAPPY BIRD CLONE"
      projectTagline="Flappy Bird game clone made using HTML, CSS and JavaScript"
      projectLink="https://amanranahere.github.io/Flappy-Bird"
      projectVideo="/videos/flappyBird_vid.mp4"
      projectYear="2024"
      projectOverview="Flappy Bird Clone is a simple recreation of the classic Flappy Bird game, built from scratch using JavaScript, HTML, and CSS. The objective is to navigate a bird through a series of pipes by flapping at the right time. The game gets progressively challenging as players try to avoid obstacles and achieve the highest score possible. It features smooth animations, keyboard controls, and score tracking for an engaging experience."
      projectMaking01="I built this project as a way to explore game development using JavaScript. One of the biggest realizations I had while working on this was that in many 2D games, it's not the player that moves forward, but rather the background and obstacles shift to create the illusion of movement. Implementing this concept in my game by making the pipes move while the bird stayed in place was a fun challenge."
      projectCodeLink="https://github.com/amanranahere/Flappy-Bird"
      projectBuiltWith={
        <>
          {builtWith.map((item, index) => (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: delays[index], duration: 0.5 }}
              viewport={{ once: true }}
              key={item.name}
              className="border border-[#6b6b6c] flex items-center gap-2 py-1 px-2"
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
            <img src={FlappyBirdImage} alt="Flappy Bird" />

            <MaskingGrid
              color="#161616"
              rowSizes={{ sm: 30, md: 45, lg: 120 }}
              columnSizes={{ sm: 60, md: 90, lg: 120 }}
            />
          </div>

          <div className="md:w-[49.5%] relative">
            <img src={FlappyBirdGameOverImg} alt="Flappy Bird Game Over" />

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

export default FlappyBird;
