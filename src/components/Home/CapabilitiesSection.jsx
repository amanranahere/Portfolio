import React from "react";

function CapabilitiesSection() {
  const data = [
    {
      number: "C/001",
      title: "Crafting Engaging Interfaces",
      description:
        "Bringing ideas to life requires more than just code—it’s about crafting seamless, interactive, and dynamic experiences. With React.js, I build modular and reusable UI components that are efficient and scalable. Managing state efficiently is essential, and Redux ensures a predictable flow, while React Router allows users to navigate effortlessly through applications.",
      buttonText: "Explore My Frontend Stack",
      img: "img",
    },
    {
      number: "C/002",
      title: "Engineering Scalable Backends",
      description:
        "Behind every robust application is a powerful backend that handles data, authentication, and scalability. I rely on Node.js and Express.js to create high-performance APIs that process requests efficiently. MongoDB, coupled with Mongoose, provides flexible and scalable data storage, while JWT and Bcrypt.js ensure secure authentication for user protection.",
      buttonText: "Dive Into My Backend Toolkit",
      img: "img",
    },
    {
      number: "C/003",
      title: "Aesthetics & Motion",
      description:
        "Design is not just about appearance—it's about experience. Tailwind CSS allows me to style applications with precision and speed, keeping the UI clean and responsive. To add motion and interactivity, I use Framer Motion and GSAP, creating fluid transitions and engaging animations that make interfaces feel alive. Forms are an essential part of user interaction, and with React Hook Form, I ensure smooth validation and state management.",
      buttonText: "See My Design & Animation Tools",
      img: "img",
    },
    {
      number: "C/004",
      title: "Dev Tools & Enhancements",
      description:
        "A streamlined workflow is key to building efficiently. Vite accelerates development with instant hot module replacement, while Axios simplifies API communication. Debugging and testing are critical, and tools like Postman help analyze API responses effectively. For backend services without the hassle of manual setup, I leverage Appwrite, a powerful backend-as-a-service solution.",
      buttonText: "Check Out My Dev Toolkit",
      img: "img",
    },
    {
      number: "C/005",
      title: "Always Exploring",
      description:
        "The tech landscape is constantly evolving, and I strive to grow with it. Exploring TypeScript has enhanced my ability to write maintainable and error-free code. Three.js opens the door to immersive 3D web experiences, while Docker streamlines development and deployment processes. Learning never stops, and I’m always on the lookout for the next tool to refine my craft.",
      buttonText: "Discover What I’m Learning",
      img: "img",
    },
  ];

  return (
    <div className="min-h-max bg-[#f1f1f1] ">
      <div className="h-[47vh] flex justify-center items-center">
        <div className="w-[50%] text-5xl font-medium">
          Tools that shape my craft
        </div>
      </div>

      {/* list */}
      <ul className="mx-4">
        {data.map((item, index) => (
          <li className="h-[70vh] py-6 border-t-2 border-dotted border-[#6a6a6a] flex">
            <div className="w-[25%]">{item.number}</div>

            <div className="w-[45%] ">
              <h1 className="text-4xl pb-10">{item.title}</h1>

              <p
                className="py-12 font-medium leading-tight text-justify"
                style={{ textIndent: "25%" }}
              >
                {item.description}
              </p>

              <button className="px-6 py-2 text-black/70 border border-black/50 bg-[#f1f1f1] text-sm font-medium tracking-widest rounded-[0.21rem] hover:text-white hover:bg-black transition duration-300 active:scale-95 uppercase">
                {item.buttonText}
              </button>
            </div>

            <div>{item.img}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CapabilitiesSection;
