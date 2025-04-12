import React, { useState } from "react";
import emailjs from "@emailjs/browser";
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
    <div className="h-full flex justify-end items-end overflow-hidden lg:pl-20">
      <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 1 }}
        viewport={{ once: true }}
        onSubmit={handleSubmit}
        className="w-full flex flex-col"
      >
        {/* fields */}
        <div className="flex flex-col gap-y-2">
          <div className="w-full relative">
            <input
              type="text"
              name="name"
              placeholder="NAME"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 lg:pr-16 lg:text-lg bg-[#161616] border-b border-[#6b6b6c] hover:border-[#ffffff84] focus:border-[#f7f7f7] text-[#f7f7f7] outline-none  transition-colors duration-500"
              style={{ lineHeight: "2.9rem" }}
            />
            <span className="absolute top-2 right-2 text-xs text-gray-400">
              *Required
            </span>
          </div>

          <div className="w-full relative">
            <input
              type="email"
              name="email"
              placeholder="EMAIL"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 lg:pr-16 lg:text-lg bg-[#161616] border-b border-[#6b6b6c] hover:border-[#ffffff84] focus:border-[#f7f7f7] text-[#f7f7f7] outline-none transition duration-500"
              style={{ lineHeight: "2.9rem" }}
            />
            <span className="absolute top-2 right-2 text-xs text-gray-400">
              *Required
            </span>
          </div>

          <div className="w-full relative">
            <input
              type="text"
              name="company"
              placeholder="COMPANY"
              value={formData.company}
              onChange={handleChange}
              className="w-full p-2 lg:pr-16 lg:text-lg bg-[#161616] border-b border-[#6b6b6c] hover:border-[#ffffff84] focus:border-[#f7f7f7] text-[#f7f7f7] outline-none transition duration-500"
              style={{ lineHeight: "2.9rem" }}
            />
            <span className="absolute top-2 right-2 text-xs text-gray-400">
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
              className="w-full p-2 lg:pr-16 lg:text-lg bg-[#161616] border-b border-[#6b6b6c] hover:border-[#ffffff84] focus:border-[#f7f7f7] text-[#f7f7f7] outline-none transition duration-500"
              style={{ lineHeight: "2.9rem" }}
            />
            <span className="absolute top-2 right-2 text-xs text-gray-400">
              Optional
            </span>
          </div>

          <div className="w-full relative">
            <textarea
              name="message"
              placeholder="MESSAGE"
              value={formData.message}
              onChange={handleChange}
              required
              rows="3"
              className="flex-grow w-full p-2 lg:pr-16 lg:text-lg bg-[#161616] border-b border-[#6b6b6c] hover:border-[#ffffffae] focus:border-[#f7f7f7] text-[#f7f7f7] outline-none transition-colors duration-500 resize-none"
              style={{ lineHeight: "2rem" }}
            ></textarea>
            <span className="absolute top-2 right-2 text-xs text-gray-400">
              *Required
            </span>
          </div>
        </div>

        {/* buttons */}
        <div className="w-full mt-6 flex justify-end items-end leading-5">
          <div className="w-[40%]">
            <button
              type="submit"
              className="w-full h-full leading-5 flex justify-end items-center text-xl text-[#6b6b6c] relative transition duration-300"
            >
              {loading ? (
                <span className="w-full flex items-end justify-end">
                  SENDING
                  <span className="loading-dots px-2">
                    <span className="text-[#f7f7f7]">.</span>
                    <span className="text-[#f7f7f7]">.</span>
                    <span className="text-[#f7f7f7]">.</span>
                  </span>
                </span>
              ) : (
                <div className="px-2 font-semibold flex justify-center font-mono hover:text-[#ffffffae] active:text-[#f7f7f7] duration-500 group">
                  <span>SEND</span>
                  <FaArrowRightLong className="w-6 ml-2 group-hover:translate-x-2 duration-300" />
                </div>
              )}

              <div className="absolute -left-10 lg:-left-0 lg:-right-16 -top-4 text-xs text-[#f7f7f7] text-mono uppercase">
                {status && <p>{status}</p>}
              </div>
            </button>
          </div>
        </div>
      </motion.form>
    </div>
  );
}
