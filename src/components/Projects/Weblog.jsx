import React from "react";
import ProjectTemplate from "./ProjectTemplate";
import { motion } from "framer-motion";
import weblogVideo from "../../assets/videos/weblog_vid.mp4";
import weblogHome from "../../assets/images/weblogHome.png";
import weblogAddBlog from "../../assets/images/weblogAddBlog.png";
import weblogAllBlogs from "../../assets/images/weblogAllBlogs.png";
import weblogBlog from "../../assets/images/weblogBlog.png";
import weblogEditBlog from "../../assets/images/weblogEditBlog.png";
import {
  SiTailwindcss,
  SiVite,
  SiReactrouter,
  SiRedux,
  SiReacthookform,
  SiAppwrite,
  SiReact,
  SiFramer,
} from "react-icons/si";
import MaskingGrid from "../Animations/MaskingGrid";

function Weblog() {
  const builtWith = [
    {
      name: "React",
      logo: <SiReact className="w-6 h-6 leading-tight" />,
    },
    {
      name: "appwrite",
      logo: <SiAppwrite className="w-6 h-6" />,
    },
    {
      name: "Vite",
      logo: <SiVite className="w-6 h-6" />,
    },
    {
      name: "tailwindcss",
      logo: <SiTailwindcss className="w-6 h-6" />,
    },
    {
      name: "Redux",
      logo: <SiRedux className="w-6 h-6" />,
    },
    {
      name: "React Router",
      logo: <SiReactrouter className="w-6 h-6" />,
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
      name: "TinyMCE",
    },
  ];

  const delays = builtWith.map(() => Math.random() * 1.2);

  return (
    <ProjectTemplate
      projectName="WEBLOG"
      projectTagline="A modern blogging platform where users can read, write, and share blogs."
      projectLink="https://weblogspace.vercel.app"
      projectVideo={weblogVideo}
      projectYear="2024"
      projectOverview="WeBlog is a modern, responsive blog website designed for discovering and sharing new ideas and topics. Users can browse through a variety of blog posts written by others, or contribute by writing their own blogs once they sign up or log in. The website offers a smooth reading experience across all devices."
      projectMaking01="WeBlog is my first large project built with React, and it was also my first real experience working with the backend—well, kind of! Since I used Appwrite, which is a backend-as-a-service, I didn't have to build everything from scratch, but I did get some exposure to setting up authentication and connecting the frontend with a backend system. It was interesting to see how everything came together, from initializing Appwrite to integrating it with my React app. This project also helped me get comfortable with state management, routing, and handling dynamic content efficiently. Plus, it was the first project I ever deployed on the web using Vercel, which was a whole new experience in itself."
      projectCodeLink="https://github.com/amanranahere/WeBlog"
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
        <div className="flex flex-col md:flex-row gap-4">
          <div className="md:w-1/2 flex-col justify-between">
            <div className="relative mb-5">
              <img src={weblogAddBlog} alt="Add Blog" />

              <MaskingGrid
                color="#161616"
                rowSizes={{ sm: 30, md: 45, lg: 120 }}
                columnSizes={{ sm: 60, md: 90, lg: 120 }}
              />
            </div>

            <div className="relative mt-5">
              <img src={weblogAllBlogs} alt="All Blogs" />

              <MaskingGrid
                color="#161616"
                rowSizes={{ sm: 30, md: 45, lg: 120 }}
                columnSizes={{ sm: 60, md: 90, lg: 120 }}
              />
            </div>

            <div className="relative mt-5">
              <img src={weblogBlog} alt="Blog" />

              <MaskingGrid
                color="#161616"
                rowSizes={{ sm: 30, md: 45, lg: 120 }}
                columnSizes={{ sm: 60, md: 90, lg: 120 }}
              />
            </div>

            <div className="relative mt-5">
              <img src={weblogEditBlog} alt="Edit Blogs" />

              <MaskingGrid
                color="#161616"
                rowSizes={{ sm: 30, md: 45, lg: 120 }}
                columnSizes={{ sm: 60, md: 90, lg: 120 }}
              />
            </div>
          </div>

          <div className="md:w-1/2 relative">
            <img src={weblogHome} alt="Home page" />

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

export default Weblog;
