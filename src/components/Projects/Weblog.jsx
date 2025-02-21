import React from "react";
import ProjectTemplate from "./ProjectTemplate";
import weblogVideo from "../../assets/videos/weblogVideo.mp4";
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
  return (
    <ProjectTemplate
      projectName="WEBLOG"
      projectTagline="A MODERN BLOGGING PLATFORM WHERE USERS CAN READ, WRITE, AND SHARE BLOGS."
      projectLink="https://weblogspace.vercel.app"
      projectVideo={weblogVideo}
      projectYear="2024"
      projectOverview="WEBLOG IS A MODERN, RESPONSIVE BLOG WEBSITE DESIGNED FOR DISCOVERING AND SHARING NEW IDEAS AND TOPICS. USERS CAN BROWSE THROUGH A VARIETY OF BLOG POSTS WRITTEN BY OTHERS, OR CONTRIBUTE BY WRITING THEIR OWN BLOGS ONCE THEY SIGN UP OR LOG IN. THE WEBSITE OFFERS A SMOOTH READING EXPERIENCE ACROSS ALL DEVICES."
      projectMaking="IN THIS HEADING I SHOULD BE TALKING ABOUT HOW I MADE THE PROJECT, ANY TECHNICAL DIFFICULTIES I FACED AND HOW I OVERCAME IT. WEBLOG IS A MODERN, RESPONSIVE BLOG WEBSITE DESIGNED FOR DISCOVERING AND SHARING NEW IDEAS AND TOPICS. USERS CAN BROWSE THROUGH A VARIETY OF BLOG POSTS WRITTEN BY OTHERS, OR CONTRIBUTE BY WRITING THEIR OWN BLOGS ONCE THEY SIGN UP OR LOG IN. THE WEBSITE OFFERS A SMOOTH READING EXPERIENCE ACROSS ALL DEVICES."
      projectCodeLink="https://github.com/amanranahere/WeBlog"
      projectBuiltWith={
        <>
          <div className="border border-black/20 flex items-center gap-2 py-1 px-2">
            <SiReact className="w-6 h-6 leading-tight" />
            <span className="leading-tight">React</span>
          </div>
          <div className="border border-black/20 flex items-center gap-2 py-1 px-2">
            <SiAppwrite className="w-6 h-6" />
            appwrite
          </div>
          <div className="border border-black/20 flex items-center gap-2 py-1 px-2">
            <SiVite className="w-6 h-6" />
            Vite
          </div>
          <div className="border border-black/20 flex items-center gap-2 py-1 px-2">
            <SiTailwindcss className="w-6 h-6" />
            tailwindcss
          </div>
          <div className="border border-black/20 flex items-center gap-2 py-1 px-2">
            <SiRedux className="w-6 h-6" />
            Redux
          </div>
          <div className="border border-black/20 flex items-center gap-2 py-1 px-2">
            <SiReactrouter className="w-6 h-6" />
            React Router
          </div>
          <div className="border border-black/20 flex items-center gap-2 py-1 px-2">
            <SiReacthookform className="w-6 h-6" />
            React Hook Form
          </div>
          <div className="border border-black/20 flex items-center gap-2 py-1 px-2">
            <SiFramer className="w-6 h-6" />
            Framer Motion
          </div>
          <div className="border border-black/20 flex items-center gap-2 py-1 px-2">
            TinyMCE
          </div>
        </>
      }
      projectImages={
        <div className="flex flex-col md:flex-row gap-4">
          <div className="md:w-1/2 flex-col justify-between">
            <img src={weblogAddBlog} alt="Add Blog" className="mb-5" />
            <img src={weblogAllBlogs} alt="All Blogs" className="mt-5" />
            <img src={weblogBlog} alt="Blog" className="mt-5" />
            <img src={weblogEditBlog} alt="Edit Blogs" className="mt-5" />
          </div>
          <div className="md:w-1/2">
            <img src={weblogHome} alt="Home page" />
          </div>
        </div>
      }
    />
  );
}

export default Weblog;
