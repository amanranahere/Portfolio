import React, { useState } from "react";
import { motion } from "framer-motion";
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
  SiJavascript,
  SiCplusplus,
  SiC,
  SiPython,
  SiVite,
  SiAppwrite,
  SiPostman,
  SiNextdotjs,
  SiGreensock,
} from "react-icons/si";

function CapabilitiesComponent() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [expandedItem, setExpandedItem] = useState(null);

  const techStack = [
    {
      name: "React JS",
      label: "Framework",
      logo: <SiReact className="w-14 h-14" />,
      description:
        "React is a JavaScript library for building fast, dynamic, and reusable UI components. It follows a component-based architecture for efficient rendering.",
      category: "Frontend",
    },
    {
      name: "Node JS",
      label: "Runtime Environment",
      logo: <SiNodedotjs className="w-14 h-14" />,
      description:
        "Node.js is a JavaScript runtime that enables server-side scripting, allowing JavaScript to run outside the browser.",
      category: "Backend",
    },
    {
      name: "Express JS",
      label: "Web Framework",
      logo: <SiExpress className="w-14 h-14" />,
      description:
        "Express.js is a lightweight and fast Node.js framework used for building APIs and backend applications with minimal boilerplate.",
      category: "Backend",
    },
    {
      name: "MongoDB",
      label: "Database",
      logo: <SiMongodb className="w-14 h-14" />,
      description:
        "MongoDB is a NoSQL database that stores data in flexible, JSON-like documents, making it scalable for modern applications.",
      category: "Backend",
    },
    {
      name: "Javascript",
      label: "Language",
      logo: <SiJavascript className="w-14 h-14" />,
      description:
        "JavaScript is a versatile programming language used for building interactive web applications. It runs in the browser and on the server with Node.js.",
      category: "Languages",
    },
    {
      name: "Redux",
      label: "State Management",
      logo: <SiRedux className="w-14 h-14" />,
      description:
        "Redux is a predictable state container for JavaScript applications, helping manage global state efficiently across components.",
      category: "Frontend",
    },
    {
      name: "React Router",
      label: "Routing",
      logo: <SiReactrouter className="w-14 h-14" />,
      description:
        "React Router enables dynamic, client-side routing in React applications, allowing seamless navigation without full page reloads.",
      category: "Frontend",
    },
    {
      name: "JWT",
      label: "Authentication",
      logo: <SiJsonwebtokens className="w-14 h-14" />,
      description:
        "JSON Web Tokens (JWT) are used for securely transmitting data between parties, commonly used for user authentication and authorization.",
      category: "Backend",
    },
    {
      name: "Mongoose",
      label: "ODM",
      logo: <SiMongoose className="w-14 h-14" />,
      description:
        "Mongoose is an ODM (Object Data Modeling) library that provides a structured schema for MongoDB, making database interactions easier in Node.js applications.",
      category: "Backend",
    },
    {
      name: "Tailwind CSS",
      label: "Styling",
      logo: <SiTailwindcss className="w-14 h-14" />,
      description:
        "Tailwind CSS is a utility-first CSS framework that helps build modern, responsive designs quickly without writing custom CSS.",
      category: "Frontend",
    },
    {
      name: "Framer Motion",
      label: "Animation",
      logo: <SiFramer className="w-14 h-14" />,
      description:
        "Framer Motion is a powerful animation library for React, allowing developers to create smooth and interactive animations with ease.",
      category: "Frontend",
    },
    {
      name: "Axios",
      label: "HTTP Client",
      logo: <SiAxios className="w-14 h-14" />,
      description:
        "Axios is a promise-based HTTP client for making API requests in JavaScript applications, handling requests and responses efficiently.",
      category: "Tools & Services",
    },
    {
      name: "React Hook Form",
      label: "Form Handling",
      logo: <SiReacthookform className="w-14 h-14" />,
      description:
        "React Hook Form is a lightweight form validation library for React, designed to improve performance and simplify form management.",
      category: "Frontend",
    },
    {
      name: "Cloudinary",
      label: "Media Storage",
      logo: <SiCloudinary className="w-14 h-14" />,
      description:
        "Cloudinary is a cloud-based media management service used for storing, optimizing, and delivering images and videos efficiently.",
      category: "Backend",
    },
    {
      name: "Multer",
      label: "File uploads",
      description:
        "Multer is a middleware for handling file uploads in Node.js applications, commonly used with Express.js.",
      category: "Backend",
    },
    {
      name: "Bcrypt JS",
      label: "Security",
      description:
        "bcrypt.js is a library used for hashing passwords, adding an extra layer of security to authentication systems.",
      category: "Backend",
    },
    {
      name: "Dotenv",
      label: "Environment Management",
      logo: <SiDotenv className="w-14 h-14" />,
      description:
        "dotenv is a package that loads environment variables from a .env file, keeping sensitive information like API keys and database credentials secure.",
      category: "Backend",
    },
    {
      name: "C++",
      label: "Language",
      logo: <SiCplusplus className="w-14 h-14" />,
      description:
        "C++ is a high-performance programming language widely used in system programming, game development, and competitive programming.",
      category: "Languages",
    },
    {
      name: "C",
      label: "Language",
      logo: <SiC className="w-14 h-14" />,
      description:
        "C is a powerful low-level programming language known for its efficiency, often used in system programming, embedded systems, and OS development.",
      category: "Languages",
    },
    {
      name: "Python",
      label: "Language",
      logo: <SiPython className="w-14 h-14" />,
      description:
        "Python is a high-level, easy-to-read programming language known for its versatility in web development, AI, data science, and automation.",
      category: "Languages",
    },
    {
      name: "Vite",
      label: "Build Tool",
      logo: <SiVite className="w-14 h-14" />,
      description:
        "Vite is a fast build tool and development server that improves the performance of modern JavaScript applications.",
      category: "Tools & Services",
    },
    {
      name: "Appwrite",
      label: "Backend-as-a-Service",
      logo: <SiAppwrite className="w-14 h-14" />,
      description:
        "Appwrite is a self-hosted backend solution that provides authentication, databases, storage, and more for modern web applications.",
      category: "Tools & Services",
    },
    {
      name: "Postman",
      label: "API Testing",
      logo: <SiPostman className="w-14 h-14" />,
      description:
        "Postman is a tool for testing APIs, allowing developers to send requests, inspect responses, and automate testing workflows.",
      category: "Tools & Services",
    },
    {
      name: "React Toastify",
      label: "Notifications",
      description:
        "React-Toastify is a library for adding customizable and easy-to-use toast notifications in React applications.",
      category: "Tools & Services",
    },
    {
      name: "Tiny MCE",
      label: "Text Editor",
      description:
        "TinyMCE is a flexible WYSIWYG editor that allows users to create and edit rich text content in web applications.",
      category: "Frontend",
    },
    {
      name: "Next JS",
      label: "Full-Stack Framework",
      logo: <SiNextdotjs className="w-14 h-14" />,
      description:
        "Next.js is a React-based framework that enables server-side rendering, static site generation, and API routes for building optimized web apps.",
      category: "Exploring / Learning",
    },
    {
      name: "GSAP",
      label: "Animation",
      logo: <SiGreensock className="w-14 h-14" />,
      description:
        "GSAP (GreenSock Animation Platform) is a powerful JavaScript animation library used to create high-performance, smooth animations in web applications.",
      category: "Exploring / Learning",
    },
  ];

  const filteredTech =
    selectedCategory === "All"
      ? techStack.filter((tech) => tech.category !== "Exploring / Learning")
      : techStack.filter((tech) => tech.category === selectedCategory);

  const toggleExpand = (name) => {
    setExpandedItem(expandedItem === name ? null : name);
  };

  const categories = [
    "All",
    "Frontend",
    "Backend",
    "Tools & Services",
    "Languages",
    "Exploring / Learning",
  ];

  const delays = categories.map(() => Math.random() * 0.7);

  const nameVariant = {
    hidden: { y: "-100%" },
    visible: {
      y: "0%",
      transition: { duration: 0.7, ease: "easeInOut" },
    },
  };

  return (
    <div className="w-full min-h-screen bg-black text-[#fff] flex flex-col lg:flex-row">
      <div className="w-full lg:w-[50%]">
        <div className="lg:sticky top-52 mt-52 lg:mt-0 lg:pt-0 px-6 z-10 bg-black">
          <motion.div className="lg:w-[80%] text-5xl lg:text-6xl pb-3 font-medium select-none overflow-hidden">
            <motion.div
              variants={nameVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Building with the Right Stack
            </motion.div>
          </motion.div>
          <p
            className="lg:w-[65%] pt-9 pb-12 lg:pb-20 select-none fade-in"
            style={{ textIndent: "35%" }}
          >
            A strong foundation of the right technologies is key to building
            efficient and high-performing applications. These are the languages,
            frameworks, and tools I use to bring ideas to life.
          </p>
        </div>

        {/* categories buttons */}
        <div className="lg:sticky top-[34rem] lg:w-[70%] gap-2 lg:gap-3 p-6 flex flex-wrap select-none">
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: delays[index], duration: 0.5 }}
              onClick={() => {
                setSelectedCategory(category);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className={`px-6 py-2 border border-white text-[0.6rem] font-medium tracking-widest rounded-[0.21rem] hover:text-black hover:bg-[#fff] transition duration-300 active:scale-95  ${
                selectedCategory === category ? "bg-[#fff] text-black" : ""
              }`}
            >
              {category.toUpperCase()}
            </motion.button>
          ))}
        </div>
      </div>

      {/* tech list */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.9 }}
        viewport={{ once: true }}
        className="lg:w-[50%] lg:pr-8 lg:mt-52 pt-6 lg:pt-0"
      >
        <div className="mx-4 border-b-2 border-dotted border-[#6a6a6a]"></div>
        <ul className="pb-6">
          {filteredTech.map(({ name, label, logo, description }) => (
            <>
              <motion.li
                layout
                onClick={() => toggleExpand(name)}
                key={name}
                className={`group flex justify-between px-4 py-2 hover:bg-[#fff] hover:text-black select-none cursor-pointer ${
                  expandedItem === name && "bg-white text-black"
                }`}
              >
                <div className="w-[90%] flex flex-col lg:flex-row justify-between">
                  {/* tech name */}
                  <div className="lg:w-[50%] text-3xl md:text-4xl font-semibold pb-1">
                    {name}
                  </div>

                  {/* label */}
                  <div
                    className={`w-full lg:w-[40%] text-[0.6rem] md:text-[0.7rem] group-hover:text-black/70
                    ${
                      expandedItem === name ? "text-black/70" : "text-white/70"
                    } 
                    font-medium md:font-semibold my-auto transition-colors duration-300`}
                  >
                    {label.toUpperCase()}
                  </div>
                </div>

                {/* plus button */}
                <svg
                  className="w-12 h-12 cursor-pointer"
                  viewBox="0 0 100 100"
                  onClick={() => expandedItem(name)}
                >
                  <line
                    x1="25"
                    y1="50"
                    x2="75"
                    y2="50"
                    stroke={expandedItem === name ? "black" : "white"}
                    className="group-hover:stroke-black"
                    strokeWidth="2"
                  />

                  <line
                    x1="50"
                    y1="25"
                    x2="50"
                    y2="75"
                    stroke={expandedItem === name ? "black" : "white"}
                    strokeWidth="2"
                    className="origin-center transition-transform duration-300 group-hover:stroke-black"
                    style={{
                      transform:
                        expandedItem === name
                          ? "rotate(90deg)"
                          : "rotate(0deg)",
                      transformOrigin: "50% 50%",
                    }}
                  />
                </svg>
              </motion.li>

              {expandedItem === name && (
                <motion.div
                  layout
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  exit={{ scaleY: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="border-t border-black/40 p-4 flex gap-4 bg-gray-50 origin-top"
                >
                  <div className="w-[60%] pb-16 py-6 text-black font-medium leading-tight">
                    {description}
                  </div>

                  <div className="w-[40%] flex justify-center pt-6">
                    <div className="text-black">{logo}</div>
                  </div>
                </motion.div>
              )}

              <div className="mx-4 border-b-2 border-dotted border-[#6a6a6a] last:mb-20"></div>
            </>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}

export default CapabilitiesComponent;
