import React from "react";
import ProjectTemplate from "./ProjectTemplate";

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
  SiVite,
  SiAppwrite,
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

  return (
    <ProjectTemplate
      projectName="VIDRON"
      projectTagline="A video streaming platform offering a diverse range of content, including engaging full-length videos and quick 30-second snaps."
      projectLink="https://vidron.vercel.app"
      projectVideo=""
      projectYear="2025"
      projectOverview="#"
      projectMaking="#"
      projectCodeLink="https://github.com/amanranahere/Vidron"
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
            <img src="#" alt="" className="mb-5" />
            <img src="#" alt="" className="mt-5" />
            <img src="#" alt="" className="mt-5" />
            <img src="#" alt="" className="mt-5" />
          </div>
          <div className="md:w-1/2">
            <img src="#" alt="" />
          </div>
        </div>
      }
    />
  );
}

export default Vidron;
