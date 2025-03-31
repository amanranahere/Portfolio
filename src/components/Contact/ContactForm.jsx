import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { SiLinkedin, SiGithub, SiX } from "react-icons/si";
import { IoMail } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    company: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

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
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="h-full flex justify-center items-center overflow-hidden">
      <form onSubmit={handleSubmit} className="w-full h-full flex flex-col">
        <div className="">
          <div className="flex flex-col md:flex-row">
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.5,
              }}
              viewport={{ once: true }}
              className="w-full relative"
            >
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 lg:p-6 text-lg md:text-2xl lg:text-4xl bg-[#0c0a00] hover:bg-[#1a1a1a] focus:bg-[#2a2a2a] text-[#f7f7f7] outline-none border-b border-x border-dotted border-[#f7f7f7] transition-colors duration-500"
                style={{ lineHeight: "2.9rem" }}
              />
              <span className="absolute top-2 right-2 text-xs text-gray-400">
                *Required
              </span>
            </motion.div>

            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.6,
              }}
              viewport={{ once: true }}
              className="w-full relative"
            >
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 lg:p-6 text-lg md:text-2xl lg:text-4xl bg-[#0c0a00] hover:bg-[#1a1a1a] focus:bg-[#2a2a2a] text-[#f7f7f7] outline-none border-b border-x md:border-x-0 md:border-r border-dotted border-[#f7f7f7] transition duration-500"
                style={{ lineHeight: "2.9rem" }}
              />
              <span className="absolute top-2 right-2 text-xs text-gray-400">
                *Required
              </span>
            </motion.div>
          </div>

          <div className="w-full flex flex-col md:flex-row">
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.7,
              }}
              viewport={{ once: true }}
              className="w-full relative"
            >
              <input
                type="text"
                name="company"
                placeholder="Company"
                value={formData.company}
                onChange={handleChange}
                className="w-full p-3 lg:p-6 text-lg md:text-2xl lg:text-4xl bg-[#0c0a00] hover:bg-[#1a1a1a] focus:bg-[#2a2a2a] text-[#f7f7f7] outline-none border-b border-x border-dotted border-[#f7f7f7] transition duration-500"
                style={{ lineHeight: "2.9rem" }}
              />
              <span className="absolute top-2 right-2 text-xs text-gray-400">
                Optional
              </span>
            </motion.div>

            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.8,
              }}
              viewport={{ once: true }}
              className="w-full relative"
            >
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 lg:p-6 text-lg md:text-2xl lg:text-4xl bg-[#0c0a00] hover:bg-[#1a1a1a] focus:bg-[#2a2a2a] text-[#f7f7f7] outline-none border-b border-x md:border-x-0 md:border-r border-dotted border-[#f7f7f7]  transition duration-500"
                style={{ lineHeight: "2.9rem" }}
              />
              <span className="absolute top-2 right-2 text-xs text-gray-400">
                Optional
              </span>
            </motion.div>
          </div>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.9 }}
            viewport={{ once: true }}
            className="w-full relative"
          >
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="3"
              className="flex-grow w-full p-3 lg:p-6 text-lg md:text-2xl lg:text-4xl bg-[#0c0a00] hover:bg-[#1a1a1a] focus:bg-[#2a2a2a] text-[#f7f7f7] border-b border-x border-dotted border-[#f7f7f7] outline-none transition-colors duration-500 resize-none"
              style={{ lineHeight: "2.9rem" }}
            ></textarea>
            <span className="absolute top-2 right-2 text-xs text-gray-400">
              *Required
            </span>
          </motion.div>
        </div>

        {/* buttons */}
        <div className="w-full mt-8 lg:mt-10 flex justify-end">
          <div className="w-full lg:w-[55%] flex flex-col  lg:flex-col text-lg md:text-2xl lg:text-lg leading-5">
            <div>
              <motion.button
                initial={{ x: 100, y: 100, opacity: 0 }}
                animate={{ x: 0, y: 0, opacity: 1 }}
                transition={{
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.6,
                }}
                type="submit"
                className="w-full h-full p-3 leading-5 flex justify-end items-center text-2xl bg-[#f1f1f1] hover:bg-[#d4d4d4] active:bg-[#bcbcbc] text-black/70 relative transition duration-300"
              >
                {loading ? (
                  <span className="flex items-center">
                    Sending
                    <span className="loading-dots">
                      <span>.</span>
                      <span>.</span>
                      <span>.</span>
                    </span>
                  </span>
                ) : (
                  <div className="font-semibold flex justify-center">
                    <span>Send</span>
                    <FaArrowRightLong className="w-6 ml-2" />
                  </div>
                )}

                <div className="absolute -top-8 text-lg text-white">
                  {status && <p>{status}</p>}
                </div>
              </motion.button>
            </div>

            <div className="w-full mt-2 flex flex-row justify-evenly">
              <motion.a
                initial={{ x: -100, y: 100, opacity: 0 }}
                animate={{ x: 0, y: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.6,
                }}
                href="https://www.linkedin.com/in/aman-rana-709a0a330/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full p-2 text-lg bg-[#f1f1f1] hover:brightness-150 active:bg-[#bcbcbc] text-black/70 flex justify-center items-center gap-2 transition duration-300"
              >
                <SiLinkedin className="text-3xl" />{" "}
                <span className="hidden md:block">Linkedin</span>
              </motion.a>

              <motion.a
                initial={{ x: -20, y: 100, opacity: 0 }}
                animate={{ x: 0, y: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.6,
                }}
                href="https://github.com/amanranahere"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full p-2 text-lg bg-[#c9c9c9] hover:brightness-150 active:bg-[#8a8a8a] text-black/70 flex justify-center items-center gap-2 transition duration-300"
              >
                <SiGithub className="text-3xl" />{" "}
                <span className="hidden md:block">Github</span>
              </motion.a>

              <motion.a
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.6,
                }}
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="w-full p-3 text-lg bg-[#969696] hover:brightness-150
               active:bg-[#545454] text-black/70 flex justify-center items-center gap-2 transition duration-300"
              >
                <SiX className="text-2xl" />
              </motion.a>

              <motion.a
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.6,
                }}
                href="mailto:amanranahere@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full p-2 text-lg bg-[#505050] hover:brightness-150 active:bg-[#2a2a2a] text-white/80 flex justify-center items-center gap-2 transition duration-300"
              >
                <IoMail className="text-3xl" />{" "}
                <span className="hidden md:block">Mail</span>
              </motion.a>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
