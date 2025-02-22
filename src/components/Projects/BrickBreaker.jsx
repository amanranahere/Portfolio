import React from "react";
import ProjectTemplate from "./ProjectTemplate";
import BrickBreakerVideo from "../../assets/videos/brickBreakerVideo.mp4";
import BrickBreakerImg from "../../assets/images/brickBreaker.png";
import BrickBreakerGameOverImg from "../../assets/images/brickBreakerGameOver.png";

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

  return (
    <ProjectTemplate
      projectName="BRICK BREAKER"
      projectTagline="All time favourite arcade game"
      projectLink="https://amanranahere.github.io/Brick-Breaker"
      projectVideo={BrickBreakerVideo}
      projectYear="2024"
      projectOverview="Brick Breaker is a classic arcade-style game where players control a paddle to bounce a ball and break bricks. The goal is to clear all the bricks while keeping the ball in play. This game is built using HTML, CSS, and JavaScript."
      projectMaking="I built this project as a fun way to practice working with the HTML5 Canvas element in JavaScript. One of the key things I learned was handling collision detection, ensuring that the ball interacts correctly with bricks, the paddle, and the screen boundaries.&nbsp;&nbsp;&nbsp;&nbsp;
      Another interesting aspect was managing game physics, like the ball’s movement and how it bounces off different surfaces. I also implemented progressive difficulty, where more rows of bricks are added as the player advances.
      &nbsp;&nbsp;&nbsp;&nbsp;
      This project really helped me improve my understanding of game loops, event handling, and working with 2D graphics in JavaScript. It was a great way to apply my knowledge while creating something interactive and enjoyable.

"
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
            <img src={BrickBreakerImg} alt="Brick Breaker" />
            <img src={BrickBreakerGameOverImg} alt="Brick Breaker Game Over" />
          </div>
        </div>
      }
    />
  );
}

export default BrickBreaker;
