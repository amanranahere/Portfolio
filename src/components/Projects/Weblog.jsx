import React from "react";
import ProjectTemplate from "./ProjectTemplate";
import weblogImg01 from "../../assets/images/ss1.png";
import weblogImg02 from "../../assets/images/ss2.png";
import weblogImg03 from "../../assets/images/ss3.png";
import weblogVid from "../../assets/videos/weblogVid.mp4";

function Weblog() {
  return (
    <ProjectTemplate
      projectName="WEBLOG"
      projectTagline="A MODERN BLOGGING PLATFORM WHERE USERS CAN READ,WRITE, AND SHARE BLOGS."
      projectLink="https://weblogspace.vercel.app"
      projectVideo={weblogVid}
      projectYear="2024"
      projectOverview="WEBLOG IS A MODERN, RESPONSIVE BLOG WEBSITE DESIGNED FOR DISCOVERING AND SHARING NEW IDEAS AND TOPICS. USERS CAN BROWSE THROUGH A VARIETY OF BLOG POSTS WRITTEN BY OTHERS, OR CONTRIBUTE BY WRITING THEIR OWN BLOGS ONCE THEY SIGN UP OR LOG IN. THE WEBSITE OFFERS A SMOOTH READING EXPERIENCE ACROSS ALL DEVICES."
      projectMaking="IN THIS HEADING I SHOULD BE TALKING ABOUT HOW I MADE THE PROJECT, ANY TECHNICAL DIFFICULTIES I FACED AND HOW I OVERCAME IT. WEBLOG IS A MODERN, RESPONSIVE BLOG WEBSITE DESIGNED FOR DISCOVERING AND SHARING NEW IDEAS AND TOPICS. USERS CAN BROWSE THROUGH A VARIETY OF BLOG POSTS WRITTEN BY OTHERS, OR CONTRIBUTE BY WRITING THEIR OWN BLOGS ONCE THEY SIGN UP OR LOG IN. THE WEBSITE OFFERS A SMOOTH READING EXPERIENCE ACROSS ALL DEVICES."
      projectCodeLink="https://github.com/amanranahere/WeBlog"
      projectBuiltWith="REACT, TAILWIND CSS, VITE, FRAMER MOTION, REACT ROUTER DOM,TINYMCE, REACT REDUX AND REDUX TOOLKIT, REACT HOOK FORM, HTML REACT PARSER, APPWRITE"
      projectImg1={weblogImg01}
      projectImg2={weblogImg02}
      projectImg3={weblogImg03}
    />
  );
}

export default Weblog;
