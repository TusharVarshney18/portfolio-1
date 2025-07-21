import { useState } from "react";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar({ theme, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-black via-gray-900 to-purple-900 p-6 shadow-xl sticky top-0 z-50 backdrop-blur-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-extrabold text-purple-400 tracking-widest animate-pulse">
          TUSHAR.DEV
        </h1>
        <nav className="hidden lg:flex space-x-10 text-lg">
          {["Home", "About", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-purple-400 transition duration-300 font-medium tracking-wide"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="text-xl hover:scale-125 transition-transform"
          >
            {theme === "dark" ? "🌞" : "🌙"}
          </button>
          <button
            className="lg:hidden focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="w-7 h-7 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:hidden bg-gray-900 px-6 pt-4 pb-6 space-y-4 shadow-md rounded-b-xl"
          >
            {["Home", "About", "Services", "Projects", "Contact"].map(
              (link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="block text-white hover:text-purple-400 font-semibold text-lg tracking-wide"
                >
                  {link}
                </a>
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
