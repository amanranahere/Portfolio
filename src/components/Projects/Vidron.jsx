import React from "react";
import ProjectTemplate from "./ProjectTemplate";
import { motion } from "framer-motion";
import VidronVideo from "../../assets/videos/vidron_vid.mp4";
import VidronHome from "../../assets/images/VidronHome.png";
import VidronVidPage from "../../assets/images/VidronVidPage.png";
import VidronSnap from "../../assets/images/VidronSnap.png";
import VidronAllSnaps from "../../assets/images/VidronAllSnaps.png";
import VidronTweets from "../../assets/images/VidronTweets.png";
import VidronMetrics from "../../assets/images/VidronMetrics.png";
import VidronChannel from "../../assets/images/VidronChannel.png";
import VidronSettings from "../../assets/images/VidronSettings.png";
import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiCloudinary,
  SiRedux,
  SiJsonwebtokens,
  SiTailwindcss,
  SiReactrouter,
  SiAxios,
  SiReacthookform,
  SiFramer,
  SiDotenv,
} from "react-icons/si";

function Vidron() {
  const builtWith = [
    {
      name: "React",
      logo: <SiReact className="w-6 h-6 leading-tight" />,
    },
    {
      name: "Node.js",
      logo: <SiNodedotjs className="w-6 h-6" />,
    },
    {
      name: "Express.js",
      logo: <SiExpress className="w-6 h-6" />,
    },
    {
      name: "MongoDB",
      logo: <SiMongodb className="w-6 h-6" />,
    },
    {
      name: "mongoose",
      logo: <SiMongoose className="w-6 h-6" />,
    },
    {
      name: "Cloudinary",
      logo: <SiCloudinary className="w-6 h-6" />,
    },
    {
      name: "multer",
    },
    {
      name: "Redux",
      logo: <SiRedux className="w-6 h-6" />,
    },
    {
      name: "JWT",
      logo: <SiJsonwebtokens className="w-6 h-6" />,
    },
    {
      name: "tailwindcss",
      logo: <SiTailwindcss className="w-6 h-6" />,
    },
    {
      name: "React Router",
      logo: <SiReactrouter className="w-6 h-6" />,
    },
    {
      name: "Axios",
      logo: <SiAxios className="w-6 h-6" />,
    },
    {
      name: "React Hook Form",
      logo: <SiReacthookform className="w-6 h-6" />,
    },
    {
      name: "Framer Motion",
      logo: <SiFramer className="w-6 h-6" />,
    },
    {
      name: "React-Toastify",
    },
    {
      name: "bcrypt.js",
    },
    {
      name: "dotenv",
      logo: <SiDotenv className="w-6 h-6" />,
    },
  ];

  const imageVariant = {
    hidden: { opacity: 0, y: 50, scale: 1.1 },
    visible: (delay) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, delay },
    }),
  };

  return (
    <ProjectTemplate
      projectName="VIDRON"
      projectTagline="A video streaming platform offering a diverse range of content, including engaging full-length videos and quick 30-second snaps."
      projectLink="https://vidron.vercel.app"
      projectVideo={VidronVideo}
      projectYear="2025"
      projectOverview="Vidron is a dynamic video streaming platform designed to deliver an engaging viewing experience. Users can explore a diverse collection of content, including full-length videos and short-form snaps. The platform allows seamless video playback, intuitive navigation, and a user-friendly interface for managing channels and content. Built with scalability in mind, Vidron offers smooth performance while handling media uploads and streaming efficiently."
      projectMaking01="Building Vidron was an exciting and challenging experience, especially because it was my first project where I designed the backend from the ground up. I had worked with backend-as-a-service platforms before, but this time, I wanted to take full control over how data flowed between the server and the client. Setting up authentication, managing media storage, and optimizing API performance were all new but rewarding challenges."
      projectMaking02="One of the most frustrating yet interesting parts was integrating the backend with the frontend. There were multiple instances where data didn’t appear as expected, and I had to carefully inspect and adjust how responses were structured. Debugging these issues helped me gain a much deeper understanding of how the frontend processes and displays data."
      projectMaking03="Vidron was more than just a coding project, it was a deep dive into the complexities of backend development. Seeing everything come together, from database design to frontend integration, was incredibly satisfying."
      projectCodeLink="https://github.com/amanranahere/Vidron"
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
        <div className=" gap-4">
          <div className="h-full flex flex-wrap justify-between">
            <motion.img
              src={VidronHome}
              alt="Vidron Home"
              className="md:w-[49.3%] mb-5"
              variants={imageVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            />

            <motion.img
              src={VidronVidPage}
              alt="Vidron Video page"
              className="md:w-[49.3%] mb-5"
              variants={imageVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 1 }}
            />

            <motion.img
              src={VidronAllSnaps}
              alt="Vidron All Snaps"
              className="md:w-[49.3%] mb-5"
              variants={imageVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            />

            <motion.img
              src={VidronSnap}
              alt="Vidron Snap"
              className="md:w-[49.3%] mb-5"
              variants={imageVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 1 }}
            />

            <motion.img
              src={VidronTweets}
              alt="Vidron Tweets"
              className="md:w-[49.3%] mb-5"
              variants={imageVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            />

            <motion.img
              src={VidronChannel}
              alt="Vidron Channel"
              className="md:w-[49.3%] mb-5"
              variants={imageVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 1 }}
            />

            <motion.img
              src={VidronMetrics}
              alt="Vidron Metrics"
              className="md:w-[49.3%] mb-5"
              variants={imageVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            />

            <motion.img
              src={VidronSettings}
              alt="Vidron Settings"
              className="md:w-[49.3%] mb-5"
              variants={imageVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 1 }}
            />
          </div>
        </div>
      }
    />
  );
}

export default Vidron;
