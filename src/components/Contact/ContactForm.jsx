import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { SiLinkedin, SiGithub, SiX } from "react-icons/si";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    company: "",
    phone: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          message: "",
        });
      })
      .catch(() => {
        setStatus("Failed to send message.");
      });
  };

  return (
    <div className="contact-form h-full flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="w-full h-full flex flex-col border-x border-dotted flex-grow"
      >
        <div className="flex flex-col md:flex-row">
          <div className="w-full relative">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-6 text-4xl leading-5 bg-[#343434] hover:bg-[#3f3f3f] focus:bg-[#3f3f3f] text-[#f7f7f7] outline-none border-b md:border-r border-dotted border-[#f7f7f7] transition-colors duration-500"
            />
            <span className="absolute top-3 right-3 text-sm text-gray-400">
              *Required
            </span>
          </div>

          <div className="w-full relative">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-6 text-4xl leading-5 bg-[#343434] hover:bg-[#3f3f3f] focus:bg-[#3f3f3f] text-[#f7f7f7] outline-none border-b border-l lg:border-l-0  border-dotted border-[#f7f7f7] focus:border-[#f7f7f7] transition duration-500"
            />
            <span className="absolute top-3 right-3 text-sm text-gray-400">
              *Required
            </span>
          </div>
        </div>

        <div className="w-full flex flex-col md:flex-row">
          <div className="w-full relative">
            <input
              type="text"
              name="company"
              placeholder="COMPANY"
              value={formData.company}
              onChange={handleChange}
              className="w-full p-6 text-4xl leading-5 bg-[#343434] hover:bg-[#3f3f3f] focus:bg-[#3f3f3f] text-[#f7f7f7] outline-none border-b md:border-r border-dotted border-[#f7f7f7] focus:border-[#f7f7f7] transition duration-500"
            />
            <span className="absolute top-3 right-3 text-sm text-gray-400">
              Optional
            </span>
          </div>

          <div className="w-full relative">
            <input
              type="tel"
              name="phone"
              placeholder="PHONE NUMBER"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-6 text-4xl leading-5 bg-[#343434] hover:bg-[#3f3f3f] focus:bg-[#3f3f3f] text-[#f7f7f7] outline-none md:border-b border-dotted border-[#f7f7f7] focus:border-[#f7f7f7] transition duration-500"
            />
            <span className="absolute top-3 right-3 text-sm text-gray-400">
              Optional
            </span>
          </div>
        </div>

        <div className="w-full h-full relative">
          <textarea
            name="message"
            placeholder="MESSAGE"
            value={formData.message}
            onChange={handleChange}
            required
            rows="2"
            className="flex-grow w-full h-full p-6 text-4xl bg-[#343434] hover:bg-[#3f3f3f] focus:bg-[#3f3f3f] text-[#f7f7f7] outline-none border-dotted border-[#f7f7f7] transition-colors duration-500 resize-none"
          ></textarea>
          <span className="absolute top-3 right-3 text-sm text-gray-400">
            *Required
          </span>
        </div>

        <div className="w-full flex flex-col md:flex-row-reverse text-4xl leading-5">
          <button
            type="submit"
            className="w-[40%] flex justify-center items-center bg-gray-800 text-white 
               hover:bg-gray-700 active:bg-gray-600 relative button-glow"
            style={{ animationDelay: "0.8s" }}
          >
            <span> SEND </span>
            <div className="absolute -top-8 text-lg text-white">
              {status && <p>{status}</p>}
            </div>
          </button>

          <div className="w-[60%] flex justify-evenly">
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-full p-6 bg-gray-300 text-white hover:bg-gray-200 transition duration-500 flex justify-center items-center gap-2 button-glow"
              style={{ animationDelay: "0.2s" }}
            >
              <SiLinkedin /> <span>LINKEDIN</span>
            </a>

            <a
              href="https://github.com/amanranahere"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-full p-6 bg-gray-500 text-white hover:bg-gray-400 transition duration-500 flex justify-center items-center gap-2 button-glow"
              style={{ animationDelay: "0.4s" }}
            >
              <SiGithub /> <span>GITHUB</span>
            </a>

            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-full p-6 bg-gray-700 text-white hover:bg-gray-600 transition duration-500 flex justify-center items-center gap-2 button-glow"
              style={{ animationDelay: "0.6s" }}
            >
              <SiX />
            </a>
          </div>
        </div>
      </form>
    </div>
  );
}
