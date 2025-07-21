// components/Contact.jsx
import React, { useEffect } from "react";
import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/send-email", formData);
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      alert("Failed to send message.");
    }
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      id="contact"
      className="relative py-24 px-4 sm:px-6 md:px-12 lg:px-20 text-white overflow-hidden bg-black"
    >
      {/* Parallax background */}
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center opacity-30"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1510070009289-b5bc34383727')",
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/70 to-black/90"></div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto z-10">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-purple-400 mb-4">
            Let's Connect
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
            Feel free to reach out for collaborations or just a friendly hello
            👋
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          data-aos="fade-up"
        >
          <div className="col-span-1">
            <label className="block mb-1 font-semibold text-sm sm:text-base">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-gray-800 border border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
            />
          </div>
          <div className="col-span-1">
            <label className="block mb-1 font-semibold text-sm sm:text-base">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full p-3 rounded-lg bg-gray-800 border border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
            />
          </div>
          <div className="col-span-1 md:col-span-2">
            <label className="block mb-1 font-semibold text-sm sm:text-base">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              placeholder="Write your message..."
              className="w-full p-3 rounded-lg bg-gray-800 border border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
            ></textarea>
          </div>
          <div className="col-span-1 md:col-span-2 text-center mt-2">
            <button
              type="submit"
              className="px-8 py-3 bg-purple-600 hover:bg-purple-700 transition rounded-lg text-lg font-medium shadow-lg"
            >
              Send Message 🚀
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
