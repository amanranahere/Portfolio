import React from "react";
import { MdArrowOutward } from "react-icons/md";

function ProjectTemplate({
  projectName,
  projectTagline,
  projectLink,
  projectVideo,
  projectYear,
  projectOverview,
  projectMaking,
  projectCodeLink,
  projectBuiltWith,
  projectImg1,
  projectImg2,
  projectImg3,
}) {
  return (
    <div className="m-8">
      {/* project name */}

      <div className="mt-44 text-[8vw] leading-[0.9] tracking-tight font-medium flex-wrap">
        {projectName}
      </div>

      <div className="mx-2">
        {/* project tagline */}

        <div className="mt-10 text-xs font-medium text-black/70 md:w-[50%] lg:w-[30%]">
          {projectTagline}
        </div>

        {/* project link */}

        <div className="text-xl my-4 font-semibold flex items-center">
          <a
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            {projectLink.replace(/^https?:\/\//, "").toUpperCase()}
          </a>
          <MdArrowOutward className="w-6 h-6" />
        </div>

        {/* project video */}

        <div className="my-8">
          <video className="" autoPlay>
            <source src={projectVideo} type="video/mp4" />
          </video>
        </div>

        {/* project 1st heading */}

        <div className="lg:w-[40%] mt-12 text-4xl font-semibold">
          IN A NUTSHELL
        </div>

        <hr className="w-full border-t border-black my-4" />

        <div className="w-full flex justify-end text-sm font-medium text-black/60">
          <div className="lg:w-[55%]">
            {/* year */}
            <div className="flex">
              <div className="w-[30%]">YEAR</div>
              <div>{projectYear}</div>
            </div>

            <hr className="w-full border-t border-black my-4" />

            {/* overview */}
            <div className="flex">
              <div className="w-[30%]">OVERVIEW</div>
              <div className="w-[70%] pr-2">{projectOverview}</div>
            </div>

            <hr className="w-full border-t border-black my-4" />

            {/* the making of */}
            <div className="flex">
              <div className="w-[30%]">THE MAKING OF</div>
              <div className="w-[70%] pr-2">{projectMaking}</div>
            </div>

            <hr className="w-full border-t border-black my-4" />

            {/* code */}
            <div className="flex">
              <div className="w-[30%]">CODE</div>
              <a
                href={projectCodeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                {projectCodeLink.replace(/^https?:\/\//, "").toUpperCase()}
                <MdArrowOutward className="w-[1.1rem] h-[1.1rem]" />
              </a>
            </div>
          </div>
        </div>

        {/* project 2nd heading */}

        <div className="lg:w-[40%] mt-20 text-4xl font-semibold">
          BUILT WITH
        </div>

        <hr className="w-full border-t border-black my-4" />

        <div>{projectBuiltWith}</div>

        {/* project 3rd heading */}

        <div>WEB VIEW</div>

        <hr />

        <div>
          {projectImg1 && <img src={projectImg1} alt="Project Snapshot 01" />}
          {projectImg2 && <img src={projectImg2} alt="Project Snapshot 02" />}
          {projectImg3 && <img src={projectImg3} alt="Project Snapshot 03" />}
        </div>
      </div>
    </div>
  );
}

export default ProjectTemplate;
