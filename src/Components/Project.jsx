// Projects.jsx
import React from "react";
import { motion } from "framer-motion";
import todo from "../assets/todo.png";
import ecommerce from "../assets/e-commerce.png";
import cart from "../assets/cart.png";
import chat from "../assets/chat.png";
import gym from "../assets/gym.png";
import loan from "../assets/loan.png";

const projects = [
  {
    title: "Fast Fincorp – Loan Consultancy Website",
    image: loan, // Make sure to import or add this image at the top
    description:
      "A professional loan consultancy website built for Fast Fincorp, offering loan application forms, Razorpay payment integration, secure API routes, email notifications, and a modern responsive UI.",
    link: "https://www.fastfincorp.com",
  },
  {
    title: "E-Commerce Platform",
    image: ecommerce,
    description:
      "A full-featured e-commerce platform with user authentication, cart management, and payment integration.",
    link: "https://e-commerce-project-frontend-six.vercel.app/",
  },
  {
    title: "Shopping Cart System",
    image: cart,
    description:
      "A dynamic shopping cart system with real-time updates and a smooth user experience.",
    link: "https://cartpage-theta.vercel.app/",
  },
  {
    title: "Chat Application",
    image: chat,
    description:
      "Real-time chat app with room-based messaging and AI-powered responses. Built with React, Node.js, and Socket.io.",
    link: "https://chat-app-frontend-lime.vercel.app/",
  },
  {
    title: "Gym Website",
    image: gym,
    description:
      "A modern gym website showcasing fitness programs, membership plans, and expert trainers to help users achieve their fitness goals.",
    link: "https://gym-website-inky-gamma.vercel.app/",
  },
  {
    title: "Todo Application",
    image: todo,
    description:
      "A modern todo application built with React and Node.js, featuring real-time updates and a clean interface.",
    link: "https://todo-app-frontend-sable.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen py-20 px-6 bg-gradient-to-br from-gray-950 to-gray-900 text-white"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-16 text-center text-[var(--theme)] drop-shadow-lg"
        >
          Featured Projects
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              className="bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-[0_0_40px_var(--theme)] transform hover:scale-[1.02] transition duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 rounded bg-[var(--theme)] text-white font-semibold hover:brightness-110 transition"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
