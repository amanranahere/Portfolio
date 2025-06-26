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
  SiFramer,
  SiDotenv,
} from "react-icons/si";
import MaskingGrid from "../Animations/MaskingGrid";

function CodeBits() {
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
      name: "Zustand",
      //   logo: <SiRedux className="w-6 h-6" />,
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
      projectName="CODE-BITS"
      projectTagline="A code snippets storing tool."
      projectLink="https://usecodebits.vercel.app"
      //   projectVideo={VidronVideo}
      projectYear="2025"
      projectOverview=""
      projectMaking01=""
      projectMaking02=""
      projectMaking03=""
      projectCodeLink="https://github.com/amanranahere/CodeBits"
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
