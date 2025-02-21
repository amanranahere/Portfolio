import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

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
  projectImages,
}) {
  return (
    <div className="m-4 md:m-8">
      {/* project name */}

      <div className="mt-44 text-[3.5rem] md:text-[8vw] leading-[0.9] tracking-tight font-medium flex-wrap">
        {projectName}
      </div>

      <div className="mx-2">
        {/* project tagline */}

        <div className="mt-10 text-xs font-medium text-black/70 md:w-[50%] lg:w-[30%]">
          {projectTagline.toUpperCase()}
        </div>

        {/* project link */}

        <div className="text-xl mt-2 md:mt-4 font-semibold flex items-center">
          <a
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            {projectLink.replace(/^https?:\/\//, "").toUpperCase()}
            <MdArrowOutward className="w-6 h-6" />
          </a>
        </div>

        {/* project video */}

        <div className="w-full">
          <video
            className="w-full h-full my-4 md:my-2 lg:my-0 [clip-path:inset(8%_0.7%_11.7%_0)]"
            autoPlay
            loop
            muted
          >
            <source src={projectVideo} type="video/mp4" />
          </video>
        </div>

        {/* project 1st heading */}

        <div className="lg:w-[40%] text-3xl md:text-4xl font-semibold leading-none">
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
              <div className="w-[70%] md:pr-2">
                {projectOverview.toUpperCase()}
              </div>
            </div>

            <hr className="w-full border-t border-black my-4" />

            {/* the making of */}
            <div className="flex">
              <div className="w-[30%]">THE MAKING OF</div>
              <div className="w-[70%] md:pr-2">
                {projectMaking.toUpperCase()}
              </div>
            </div>

            <hr className="w-full border-t border-black my-4" />

            {/* code */}
            <div className="flex">
              <div className="w-[30%]">CODE</div>
              <a
                href={projectCodeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center break-all w-[70%]"
              >
                {projectCodeLink.replace(/^https?:\/\//, "").toUpperCase()}
                <MdArrowOutward className="w-[1.1rem] h-[1.1rem]" />
              </a>
            </div>
          </div>
        </div>

        {/* project 2nd heading */}

        <div className="lg:w-[40%] mt-32 text-4xl font-semibold leading-none">
          BUILT WITH
        </div>

        <hr className="w-full border-t border-black my-4" />

        <div className="w-full flex justify-end">
          <div className="lg:w-[55%] flex flex-wrap gap-2 pr-2">
            {projectBuiltWith}
          </div>
        </div>

        {/* project 3rd heading */}

        <div className="lg:w-[40%] mt-32 text-4xl font-semibold leading-none">
          WEB VIEW
        </div>

        <hr className="w-full border-t border-black mt-4 mb-6" />

        <div className="w-full h-full">{projectImages}</div>

        <hr className="w-full border-t border-black my-10" />

        {/* other projects heading */}
        <Link
          to={`/work`}
          className="text-4xl pb-20 md:text-[8vw] leading-[0.9] tracking-tight font-medium flex flex-wrap justify-end"
        >
          OTHER PROJECTS
        </Link>
      </div>
    </div>
  );
}

export default ProjectTemplate;
