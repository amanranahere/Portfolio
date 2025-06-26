import React from "react";
import ProjectTemplate from "./ProjectTemplate";
import { motion } from "framer-motion";
import VidronVideo from "../../assets/videos/vidron_vid.mp4";
import VidronHome from "../../assets/images/vidronHome.png";
import VidronVidPage from "../../assets/images/vidronVidPage.png";
import VidronSnap from "../../assets/images/vidronSnap.png";
import VidronAllSnaps from "../../assets/images/vidronAllSnaps.png";
import VidronTweets from "../../assets/images/vidronTweets.png";
import VidronMetrics from "../../assets/images/vidronMetrics.png";
import VidronChannel from "../../assets/images/vidronChannel.png";
import VidronSettings from "../../assets/images/vidronSettings.png";
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
  SiDotenv,
} from "react-icons/si";
import MaskingGrid from "../Animations/MaskingGrid";

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

  const delays = builtWith.map(() => Math.random() * 1.2);

  return (
    <ProjectTemplate
      projectName="VIDRON"
      projectTagline="A video streaming platform offering a diverse range of content, including engaging full-length videos and short-form snaps."
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
        <div className="gap-4">
          <div className="h-full flex flex-wrap justify-between">
            <div className="md:w-[49.3%] mb-5 relative">
              <img src={VidronHome} alt="Vidron Home" />

              <MaskingGrid
                color="#161616"
                rowSizes={{ sm: 30, md: 45, lg: 120 }}
                columnSizes={{ sm: 60, md: 90, lg: 120 }}
              />
            </div>

            <div className="md:w-[49.3%] mb-5 relative">
              <img src={VidronVidPage} alt="Vidron Video page" />

              <MaskingGrid
                color="#161616"
                rowSizes={{ sm: 30, md: 45, lg: 120 }}
                columnSizes={{ sm: 60, md: 90, lg: 120 }}
              />
            </div>

            <div className="md:w-[49.3%] mb-5 relative">
              <img src={VidronAllSnaps} alt="Vidron All Snaps" />

              <MaskingGrid
                color="#161616"
                rowSizes={{ sm: 30, md: 45, lg: 120 }}
                columnSizes={{ sm: 60, md: 90, lg: 120 }}
              />
            </div>

            <div className="md:w-[49.3%] mb-5 relative">
              <img src={VidronSnap} alt="Vidron Snap" />

              <MaskingGrid
                color="#161616"
                rowSizes={{ sm: 30, md: 45, lg: 120 }}
                columnSizes={{ sm: 60, md: 90, lg: 120 }}
              />
            </div>

            <div className="md:w-[49.3%] mb-5 relative">
              <img src={VidronTweets} alt="Vidron Tweets" />

              <MaskingGrid
                color="#161616"
                rowSizes={{ sm: 30, md: 45, lg: 120 }}
                columnSizes={{ sm: 60, md: 90, lg: 120 }}
              />
            </div>

            <div className="md:w-[49.3%] mb-5 relative">
              <img src={VidronChannel} alt="Vidron Channel" />

              <MaskingGrid
                color="#161616"
                rowSizes={{ sm: 30, md: 45, lg: 120 }}
                columnSizes={{ sm: 60, md: 90, lg: 120 }}
              />
            </div>

            <div className="md:w-[49.3%] mb-5 relative">
              <img src={VidronMetrics} alt="Vidron Metrics" />

              <MaskingGrid
                color="#161616"
                rowSizes={{ sm: 30, md: 45, lg: 120 }}
                columnSizes={{ sm: 60, md: 90, lg: 120 }}
              />
            </div>

            <div className="md:w-[49.3%] mb-5 relative">
              <img src={VidronSettings} alt="Vidron Settings" />

              <MaskingGrid
                color="#161616"
                rowSizes={{ sm: 30, md: 45, lg: 120 }}
                columnSizes={{ sm: 60, md: 90, lg: 120 }}
              />
            </div>
          </div>
        </div>
      }
    />
  );
}

export default Vidron;
