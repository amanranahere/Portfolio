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
      projectName="WEBLOG"
      projectTagline="A modern blogging platform where users can read, write, and share blogs."
      projectLink="https://weblogspace.vercel.app"
      projectVideo={weblogVideo}
      projectYear="2024"
      projectOverview="WeBlog is a modern, responsive blog website designed for discovering and sharing new ideas and topics. Users can browse through a variety of blog posts written by others, or contribute by writing their own blogs once they sign up or log in. The website offers a smooth reading experience across all devices."
      projectMaking="WeBlog is my first large project built with React, and it was also my first real experience working with the backend—well, kind of! Since I used Appwrite, which is a backend-as-a-service, I didn’t have to build everything from scratch, but I did get some exposure to setting up authentication and connecting the frontend with a backend system. It was interesting to see how everything came together, from initializing Appwrite to integrating it with my React app. This project also helped me get comfortable with state management, routing, and handling dynamic content efficiently. Plus, it was the first project I ever deployed on the web using Vercel, which was a whole new experience in itself."
      projectCodeLink="https://github.com/amanranahere/WeBlog"
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
        <div className="flex flex-col md:flex-row gap-4">
          <div className="md:w-1/2 flex-col justify-between">
            <motion.img
              src={weblogAddBlog}
              alt="Add Blog"
              className="mb-5"
              variants={imageVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            />

            <motion.img
              src={weblogAllBlogs}
              alt="All Blogs"
              className="mt-5"
              variants={imageVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            />

            <motion.img
              src={weblogBlog}
              alt="Blog"
              className="mt-5"
              variants={imageVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            />

            <motion.img
              src={weblogEditBlog}
              alt="Edit Blogs"
              className="mt-5"
              variants={imageVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            />
          </div>
          <div className="md:w-1/2">
            <motion.img
              src={weblogHome}
              alt="Home page"
              variants={imageVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            />
          </div>
        </div>
      }
    />
  );
}

export default Weblog;
