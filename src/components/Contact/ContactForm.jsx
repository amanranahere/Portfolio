import React, { useState } from "react";
import emailjs from "@emailjs/browser";

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
        className="w-full h-full flex flex-col border-x border-b border-dotted flex-grow"
      >
        <div className="flex flex-col md:flex-row">
          <input
            type="text"
            name="name"
            placeholder="NAME"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-6 text-4xl leading-5 bg-[#343434] text-[#f7f7f7] outline-none border-b md:border-r border-dotted border-[#f7f7f7] transition-colors duration-300"
          />

          <input
            type="email"
            name="email"
            placeholder="EMAIL"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-6 text-4xl leading-5 bg-[#343434] text-[#f7f7f7] outline-none border-b border-l lg:border-l-0  border-dotted border-[#f7f7f7] focus:border-[#f7f7f7] transition duration-300"
          />
        </div>

        <div className="w-full flex flex-col md:flex-row">
          <input
            type="text"
            name="company"
            placeholder="COMPANY"
            value={formData.company}
            onChange={handleChange}
            className="w-full p-6 text-4xl leading-5 bg-[#343434] text-[#f7f7f7] outline-none border-b md:border-r border-dotted border-[#f7f7f7] focus:border-[#f7f7f7] transition duration-300"
          />

          <input
            type="tel"
            name="phone"
            placeholder="PHONE NUMBER"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-6 text-4xl leading-5 bg-[#343434] text-[#f7f7f7] outline-none md:border-b border-dotted border-[#f7f7f7] focus:border-[#f7f7f7] transition duration-300"
          />
        </div>

        <textarea
          name="message"
          placeholder="MESSAGE"
          value={formData.message}
          onChange={handleChange}
          required
          rows="2"
          className="flex-grow h-full p-6 text-4xl leading-5 bg-[#343434] text-[#f7f7f7] outline-none border-dotted border-[#f7f7f7] transition-colors duration-300 resize-none"
        ></textarea>

        <div className="w-full flex flex-col md:flex-row-reverse text-4xl leading-5">
          <button
            type="submit"
            className="w-[40%] flex justify-center items-center bg-[#e7e7e7] hover:bg-[#d0d0d0] active:bg-[#c4c4c4]"
          >
            SEND
          </button>

          <div className="w-[60%] p-3 bg-[#444444] flex justify-evenly">
            <a
              href=""
              className="hover:text-gray-600 font-medium transition duration-300"
            >
              LINKEDN
            </a>
            <a
              href=""
              className="hover:text-gray-600 font-medium transition duration-300"
            >
              GITHUB
            </a>
            <a
              href=""
              className="hover:text-gray-600 font-medium transition duration-300"
            >
              TWITTER
            </a>
          </div>
        </div>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
}
