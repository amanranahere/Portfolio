import ProjectTemplate from "./ProjectTemplate";
import { motion } from "framer-motion";
import CodebitsHero from "../../assets/images/codebitsHero.png";
import CodebitsOverview from "../../assets/images/codebitsOverview.png";
import CodebitsFeatures from "../../assets/images/codebitsFeatures.png";
import CodebitsShowcase from "../../assets/images/codebitsShowcase.png";
import Codebitsfooter from "../../assets/images/codebitsFooter.png";
import CodebitsHome from "../../assets/images/codebitsHome.png";
import CodebitsDropdown from "../../assets/images/codebitsDropdown.png";
import CodebitsSearch from "../../assets/images/codebitsSearch.png";
import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiJsonwebtokens,
  SiTailwindcss,
  SiReactrouter,
  SiAxios,
  SiReacthookform,
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
    },
    {
      name: "Monaco Editor",
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
      name: "Framer Motion",
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
  ];

  const delays = builtWith.map(() => Math.random() * 1.2);

  return (
    <ProjectTemplate
      projectName="CODEBITS"
      projectTagline="A code snippets storing tool."
      projectLink="https://usecodebits.vercel.app"
      projectVideo="/videos/codebits_vid.mp4"
      projectYear="2025"
      projectOverview="CodeBits is a modern web app designed to help developers save, organize, and quickly access reusable code snippets. It provides a familiar, editor-like experience with syntax highlighting and a Monaco Editor integration, making it feel like you're working inside a lightweight version of VS Code. Users can categorize snippets by language, add descriptions, and manage them effortlessly, making it an essential tool for boosting coding productivity."
      projectMaking01="CodeBits started as an idea to solve a personal problem — I often found myself searching old projects just to copy a piece of code I had written months ago. I wanted a centralized, clean, and developer-friendly way to store these snippets, so I decided to build one myself. The biggest design goal was to make it feel familiar to developers, which is why I used Monaco Editor to give it a VS Code-like experience."
      projectMaking02="What I enjoyed most was refining the user interface to feel intuitive and fast. I also experimented with Framer Motion animations for smooth transitions, giving it a polished, modern vibe. CodeBits isn't just another CRUD app for me — it's a tool I actively use, which makes seeing it in action even more satisfying."
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
              <img src={CodebitsHero} alt="Codebits Hero" />

              <MaskingGrid
                color="#161616"
                rowSizes={{ sm: 30, md: 45, lg: 120 }}
                columnSizes={{ sm: 60, md: 90, lg: 120 }}
              />
            </div>

            <div className="md:w-[49.3%] mb-5 relative">
              <img src={CodebitsOverview} alt="CodeBits Overview" />

              <MaskingGrid
                color="#161616"
                rowSizes={{ sm: 30, md: 45, lg: 120 }}
                columnSizes={{ sm: 60, md: 90, lg: 120 }}
              />
            </div>

            <div className="md:w-[49.3%] mb-5 relative">
              <img src={CodebitsFeatures} alt="Codebits Features" />

              <MaskingGrid
                color="#161616"
                rowSizes={{ sm: 30, md: 45, lg: 120 }}
                columnSizes={{ sm: 60, md: 90, lg: 120 }}
              />
            </div>

            <div className="md:w-[49.3%] mb-5 relative">
              <img src={CodebitsShowcase} alt="Codebits Showcase" />

              <MaskingGrid
                color="#161616"
                rowSizes={{ sm: 30, md: 45, lg: 120 }}
                columnSizes={{ sm: 60, md: 90, lg: 120 }}
              />
            </div>

            <div className="md:w-[49.3%] mb-5 relative">
              <img src={Codebitsfooter} alt="Codebits Footer" />

              <MaskingGrid
                color="#161616"
                rowSizes={{ sm: 30, md: 45, lg: 120 }}
                columnSizes={{ sm: 60, md: 90, lg: 120 }}
              />
            </div>

            <div className="md:w-[49.3%] mb-5 relative">
              <img src={CodebitsHome} alt="Codebits Home" />

              <MaskingGrid
                color="#161616"
                rowSizes={{ sm: 30, md: 45, lg: 120 }}
                columnSizes={{ sm: 60, md: 90, lg: 120 }}
              />
            </div>

            <div className="md:w-[49.3%] mb-5 relative">
              <img src={CodebitsDropdown} alt="Codebits Dropdown" />

              <MaskingGrid
                color="#161616"
                rowSizes={{ sm: 30, md: 45, lg: 120 }}
                columnSizes={{ sm: 60, md: 90, lg: 120 }}
              />
            </div>

            <div className="md:w-[49.3%] mb-5 relative">
              <img src={CodebitsSearch} alt="Codebits Search" />

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

export default CodeBits;
