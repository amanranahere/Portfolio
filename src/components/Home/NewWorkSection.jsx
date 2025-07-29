import { useNavigate } from "react-router-dom";
import RandomText from "../Animations/RandomText";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

import codeBits from "../../assets/images/codeBits.png";
import vidron from "../../assets/images/vidronHome.png";
import trial from "../../assets/images/trial.png";
import weblog from "../../assets/images/weblogAllBlogs.png";
import brickBreaker from "../../assets/images/brickBreaker.png";

function NewWorkSection() {
  const navigate = useNavigate();

  return (
    <div className="h-full w-full flex flex-col px-4 md:px-16 lg:px-14 pt-20 lg:py-20">
      <div className="w-full flex justify-between pb-10">
        <div className="lg:w-[40%] pb-10 text-lg lg:text-xl font-medium tracking-widest select-none josefinSans-text text-[#f3f1ec]">
          <span>/</span>
          <span className="pl-10 lg:pl-28">
            <RandomText text="WORK" />
          </span>
        </div>

        <div
          className="w-[35%] text-sm lg:text-xl text-[#6b6b6c] text-justify font-semibold uppercase font-mono translate-y-5"
          style={{ textIndent: "30%" }}
        >
          Explore the depth of my work. Built with expertise and creativity.
        </div>
      </div>

      <div className="flex flex-col gap-28">
        {/* row 01 */}
        <div className="flex flex-row justify-between">
          <div className="w-[58%] h-full aspect-video rounded-sm">
            <img className="w-full rounded-sm" src={codeBits} alt="CodeBits" />
          </div>

          <div className="w-[37%]">
            <div className="w-full pt-16 h-full aspect-video rounded-sm">
              <img className="w-full rounded-sm" src={vidron} alt="Vidron" />
            </div>

            <div className="border-b border-[#4a4a4a]"></div>
          </div>
        </div>

        {/* row 02 */}
        <div className="flex flex-row justify-between">
          <div className="w-[40%]">
            <div className="w-full pt-16 h-full aspect-video rounded-sm">
              <img
                className="w-full rounded-sm"
                src={brickBreaker}
                alt="BrickBreaker"
              />
            </div>
          </div>

          <div className="w-[58%] h-full aspect-video rounded-sm">
            <img className="w-full rounded-sm" src={weblog} alt="WeBlog" />
          </div>
        </div>
      </div>

      {/* -------------------------------------- */}

      {/* view-all btn */}
      <div className="h-40">
        <div className="h-full flex items-end justify-end select-none">
          <button
            onClick={() => navigate("/work")}
            className="tracking-widest text-[#9a9a9a] hover:text-[#f7f7f7] font-mono duration-300 text-xs lg:text-sm flex items-center cursor-pointer"
          >
            <span className="px-2 whitespace-nowrap p-5">VIEW ALL</span>
            <HiOutlineArrowNarrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewWorkSection;
