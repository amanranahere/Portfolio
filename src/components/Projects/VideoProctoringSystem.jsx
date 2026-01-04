import ProjectTemplate from "./ProjectTemplate";
import { motion } from "framer-motion";
import CodebitsHero from "../../assets/images/codebitsHero.png";
import CodebitsOverview from "../../assets/images/codebitsOverview.png";
import CodebitsFeatures from "../../assets/images/codebitsFeatures.png";
import CodebitsShowcase from "../../assets/images/codebitsShowcase.png";
import CodebitsFooter from "../../assets/images/cbFooter.png";
import CodebitsHome from "../../assets/images/codebitsHome.png";
import CodebitsDropdown from "../../assets/images/cbdropdown.png";
import CodebitsSearch from "../../assets/images/codebitsSearch.png";
import {
  SiTailwindcss,
  SiReacthookform,
  SiNextdotjs,
  SiTypescript,
} from "react-icons/si";
import MaskingGrid from "../Animations/MaskingGrid";

function VideoProctoringSystem() {
  const builtWith = [
    {
      name: "Next.js",
      logo: <SiNextdotjs className="w-6 h-6 leading-tight" />,
    },
    {
      name: "TypeScript",
      logo: <SiTypescript className="w-6 h-6 leading-tight" />,
    },
    {
      name: "Zustand",
    },
    {
      name: "tailwindcss",
      logo: <SiTailwindcss className="w-6 h-6" />,
    },
    {
      name: "Motion",
    },
    {
      name: "React Hook Form",
      logo: <SiReacthookform className="w-6 h-6" />,
    },
  ];

  const delays = builtWith.map(() => Math.random() * 1.2);

  return (
    <ProjectTemplate
      projectName="VIDEO PROCTORING SYSTEM"
      projectTagline="Monitoring system for remote assessments."
      projectLink="https://video-proctoring-project.vercel.app"
      projectVideo="/videos/codebits_vid.mp4"
      projectYear="2025"
      projectOverview="A video proctoring system designed to simulate remote assessment monitoring. It analyzes a live camera feed to detect events like face absence, multiple faces, or unauthorized devices, displays detected activities in real time, and generates a session summary with all logged events at the end."
      projectMaking01="This project began as a small assignment focused on detecting suspicious activities during a remote session, such as face absence and unauthorized objects, and logging those events in real time. The initial goal was to explore live video analysis rather than build a finished product."
      projectMaking02="As the detection logic became more reliable, I expanded the idea into a presentable proctoring prototype that simulates a real proctored session. The platform demonstrates how live monitoring, real-time activity logs, alerts, and session summaries could work together in a real-world assessment setup."
      projectMaking03="To support this, the system uses open-source tools like TensorFlow (via npm) and MediaPipe (via CDN) for real-time detection and analysis. Instead of deep machine learning research, I focused on understanding these models at a practical level to implement object detection and basic face-related checks effectively."
      projectCodeLink="https://github.com/amanranahere/video-proctoring-system"
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
              <img src={CodebitsFooter} alt="Codebits Footer" />

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

export default VideoProctoringSystem;
